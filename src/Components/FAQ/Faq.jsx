import React from 'react';
import fi from '../../assets/images/text.png'
const Faq = () => {
    
  const faqData = [
    {
      "question": "What Facilities Does Your Hotel Have?",
      "answer": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad voluptate doloribus eos sunt labore ea enim voluptatem, sequi voluptas rem doloremque architecto. Libero, vero natus."
    },
    {
      "question": "How Do I Book A Room For My Vacation?",
      "answer": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dignissimos, ad error perspiciatis reprehenderit sint neque iure magni dolores ut?"
    },
    {
      "question": "How We are best among others?",
      "answer":  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dignissimos, ad error perspiciatis reprehenderit sint neque iure magni dolores ut?"
    },
    {
      "question": "Is There Any Fitness Center In Your Hotel?",
      "answer":  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dignissimos, ad error perspiciatis reprehenderit sint neque iure magni dolores ut?"
    },
    {
      "question": "What Type Of Room Service Do You Offer?",
      "answer":  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dignissimos, ad error perspiciatis reprehenderit sint neque iure magni dolores ut?"
    },
    {
      "question": "What Facilities Does Your Hotel Have?",
      "answer": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dignissimos, ad error perspiciatis reprehenderit sint neque iure magni dolores ut?"
    },
    {
      "question": "How Do I Book A Room For My Vacation?",
      "answer":  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dignissimos, ad error perspiciatis reprehenderit sint neque iure magni dolores ut?"
    }
  ]

    return (
        <div className='container my-20 mx-auto'>
            <div className='flex gap-5'>
                <img src={fi} className='flex-1' alt="" />
                <div className="flex-1 space-y-3">
                {
                    faqData.map((item , idx) => <div key={idx} className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title m-2 font-semibold">
    {item?.question}
  </div>
  <div className="collapse-content mx-2 text-sm">
    {item?.answer}
    </div>
</div>)
                }
                </div>
            </div>
        </div>
    );
};

export default Faq;