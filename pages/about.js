import Head from "next/head";
import Layout from "../components/layout";

import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import clsx from "clsx";

const faqs = [
  {
    question: "Corporate Values",
    answer: [
      `Over the last few years we have seen several large companies de-platform content creators because their material is sexual in nature. This is an injustice. We owe our content creators a safe space to produce whatever type of content they would like to produce. Be it sexual, or not, in nature. This space should be safe and permanent.`,
      "Trystr welcomes all types of content, but we have started our space with sex work in mind, because this community is being underserved. As we develop we will seek to create spaces for other types of content to be made, and we will seek to allow users to curate that content as they wish.",
      "That being said, we seek to create a space which is inclusive, free of rhetoric which is harmful to groups which are protected, or should be protected. This includes, but is not limited to Women, Sex workers, BIPOC, LGBTQIA+, amongst other groups. Trystr will not be a space where hate speech, harrassment, or explotation will be tolerated. These values are important to us, as well as the following values.",
    ],
  },
  {
    question: "Transparency",
    answer: `Communicating honestly with respect to content creation and dissemination decisions`,
  },
  {
    question: "Safety",
    answer: `Protecting their physical safety`,
  },
  {
    question: "Security",
    answer: `Protecting their digital safety`,
  },
  {
    question: "Allyship",
    answer: `Believing women, and supporting them in their journey`,
  },
  {
    question: "Support",
    answer: "Believing sex work is work",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function About() {
  return (
    <Layout title="About">
      <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <dl className="mt-6 space-y-6 divide-y divide-gray-200">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="pt-6">
              {({ open }) => (
                <>
                  <dt className="text-lg">
                    <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                      <span className="font-medium text-gray-900">
                        {faq.question}
                      </span>
                      <span className="ml-6 h-7 flex items-center">
                        <ChevronDownIcon
                          className={classNames(
                            open ? "-rotate-180" : "rotate-0",
                            "h-6 w-6 transform"
                          )}
                          aria-hidden="true"
                        />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    {Array.isArray(faq.answer) ? (
                      faq.answer.map((answer, i) => (
                        <p
                          key={i}
                          className={clsx("text-base text-gray-500", {
                            "pb-4": i !== faq.answer.length - 1,
                          })}
                        >
                          {answer}
                        </p>
                      ))
                    ) : (
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    )}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </Layout>
  );
}
