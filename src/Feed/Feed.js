import "../App.css";
import "./feed.css";
import Content from '../assets/content.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartBroken, faHeart, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faComment} from "@fortawesome/free-regular-svg-icons";
import { useState } from 'react';

let mapping = ['', '', '', '', '', ''];
function Feed() {
    const [heartSelected, updateHeartSelected] = useState({});
    const [commentMade, updateCommentMade] = useState({});
    const [paymentMade, updatePayment] = useState({});

   function checkValue(property, idx){
        if (property === 'heart') {
            return `heart-${idx}` in heartSelected &&
                        heartSelected[`heart-${idx}`]
        }

        if (property === 'comment') {
            return `comment-${idx}` in commentMade &&
                        commentMade[`comment-${idx}`]
        }

        if (property === 'payment') {
            return `payment-${idx}` in paymentMade &&
                        paymentMade[`payment-${idx}`]
        }
    }
  return (
      <div>
          This is where the feed of content goes
          {mapping.map((_, idx) => {
              return (
                <div className="album-item" key={`heart-${idx}`}>
                  <div className="profile-information">User information</div>
                  <div className="post-description">Description</div>
                  <img src={Content} alt="Dog" />
                  <div className="interaction-container">
                    <FontAwesomeIcon
                      className="heart-icon"
                      icon={
                        checkValue('heart', idx)
                          ? faHeart
                          : faHeartBroken
                      }
                      style={{
                        color:
                          checkValue('heart', idx)
                            ? "red"
                            : "black",
                      }}
                      onClick={() => {
                        if (
                          checkValue('heart', idx)
                        ) {
                          updateHeartSelected({
                            ...heartSelected,
                            [`heart-${idx}`]: false,
                          });
                        } else {
                          updateHeartSelected({
                            ...heartSelected,
                            [`heart-${idx}`]: true,
                          });
                        }
                      }}
                    />

                    <FontAwesomeIcon
                      className="comment-icon"
                      icon={faComment}
                      style={{
                        color:
                          checkValue('comment', idx) ? "red" : "black",
                      }}
                      onClick={() => {
                        if (checkValue('comment', idx)) {
                          updateCommentMade({ ...commentMade, [`comment-${idx}`]: false });
                        } else {
                          updateCommentMade({ ...commentMade, [`comment-${idx}`]: true });
                        }
                      }}
                    />

                    <FontAwesomeIcon
                      className="payment-icon"
                      icon={faDollarSign}
                      style={{
                        color: checkValue('payment', idx) ? "green" : "black",
                      }}
                      onClick={() => {
                        if (checkValue('payment', idx)) {
                          updatePayment({...paymentMade, [`payment-${idx}`]: false });
                        } else {
                          updatePayment({...paymentMade, [`payment-${idx}`]: true });
                        }
                      }}
                    />
                  </div>
                </div>
              );
          }) }
    </div>
  );
}

export default Feed;
