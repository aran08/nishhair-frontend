import React from "react";

const About = () => {
  return (
    <div>
      <p className="text-4xl md:text-5xl font-medium h-[200px] md:h-[350px] flex justify-center items-center">
        About Us
      </p>
      <div>
        <p className="flex justify-center h-14 gap-3">
          <h1 >O U R</h1><h1>S T O R Y</h1>
        </p>
        <div className="flex justify-center w-full">
          <p className="md:w-[55%] w-11/12 text-3xl md:text-4xl text-center font-semibold pb-10">
            {" "}
            Nish Hair is a product of love. A love for beauty, quality and
            strength. A love for hair weaves and a love for all those who wear
            them.
          </p>
        </div>
        <div className="flex justify-center w-full">
          <p className="w-11/12 md:w-[57%] text-center pb-10">
            We believe that to truly love a piece of hair extension means to
            utilize every inch of it, to empower those who spend on it and to
            honour those who craft it.
          </p>
        </div>
        <div className="md:flex w-full">
          <div className="md:w-[50%]">
            <img src="/images/about1.webp" alt="" className="md:h-screen sm:h-[350px]" />
          </div>
          <div className="md:w-[50%] flex justify-center items-center">
            <div className="w-11/12 md:w-[80%] md:pt-0 pt-3">
              <p className="text-2xl font-semibold pb-8">
                THE STORY OF NISH HAIR
              </p>
              <p className="pb-8 font-medium text-[17px]">
                Nish Hair, founded in 2017, emerged from a deep passionand love
                for hair. We recognized the unmet demand for high-quality human
                hairextensions beyond the boundaries of the fashion and beauty
                industry. Ourmission was clear: to provide accessibility and
                versatility to everyone,especially women, seeking beauty,
                confidence, and a stunning appearance.
              </p>
              <p className="font-medium text-[17px]">
                We became pioneers in India, introducing DIY hairextensions,
                including clip-in hair toppers. Starting with a small team and
                ahandful of clients, we have grown into a global community,
                serving womenworldwide from diverse backgrounds and
                lifestyles.Hair loss, thinning, and damaged hair can have a
                profoundimpact on self-esteem and overall well-being. Sadly,
                many suffer in silence. AtNishHair, we understand the
                seriousness of these concerns. Whether you desirelonger locks,
                struggle with hair growth, or simply want to look incredible
                fora special occasion, we believe that everyone deserves the
                hair of their dreams.It's about more than just your
                appearance—it's about self-esteem,relationships, career, and the
                ability to live an active life.
              </p>
            </div>
          </div>
        </div>
        <div className="scrolling-text--item outline-text--true">
          {/* <span className="text-5xl border border-[#24B9B5] text-[#24B9B5]">
            To constantly get better and deliver love and confidence to you, so
            that you and everyone else can achieve the hair of their dreams and
            desires.
          </span> */}
        </div>
        <div className="md:flex mb-14">
          <div className="md:w-[50%] flex justify-center items-center">
            <div className="w-11/12 md:w-[70%] md:ml-20">
              <p className="text-[30px] font-medium">
                We started NishHair with one GOAL
              </p>
              <p className="my-6">
                To empower you with love, confidence, and dream-worthy hair,
                turning your aspirations into stunning realities.
              </p>
              <p className="text-2xl font-semibold pb-6">
                Our customers are at the core of everything we do.{" "}
              </p>
              <p>
                We are devoted to providing excellence in every aspect. Offering
                a diverse range of 100% human hair extensions, along with
                premium accessories, we ensure you find the perfect style,
                texture, and size for your dream hair. Our curated collection
                includes wigs, hair toppers, extensions, colorful strands, and
                clip-in bangs, making us your ultimate destination. With expert
                advice and convenient delivery to your doorstep, we strive to be
                your trusted hair companion. As a growing team led by empowered
                women, we stand for gender equality, fostering open-mindedness,
                courage, compassion, and belief in our community's potential.
              </p>
              <div>
                <button className="bg-black text-white rounded-3xl text-sm font-semibold h-[50px] w-[170px] mt-6 md:mb-0 mb-3">
                  SEE COLLECTION
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-[50%]">
            <img src="/images/about2.webp" alt="" />
          </div>
        </div>
        <div className="w-full md:flex justify-center">
          <div className="md:flex w-11/12">
            <div className="md:w-[50%] relative">
              <img
                src="/images/about4.webp"
                alt=""
                className="md:w-[481.56px] md:h-[642.5px] md:ml-28 md:px-0 ml-9"
              />
              <div className="absolute md:top-16 md:right-6 right-0 top-5">
                <img
                  src="/images/about3"
                  alt=""
                  className="md:h-[190px] md:w-[250px] h-[100px] w-[150px]"
                />
              </div>
              <div className="absolute  bottom-0 left-3">
                <img
                  src="/images/about5.webp"
                  alt=""
                  className="md:h-[250px] md:w-[200px] h-[160px] w-[120px]"
                />
              </div>
            </div>
            <div className="md:w-[50%] flex justify-center items-center">
              <div className="flex flex-col md:w-10/12 md:pl-3 w-11/12">
                <p>
                  <h className="mr-3">F O U N D E R</h> S P E A K
                </p>
                <p className="font-semibold text-3xl md:text-4xl py-5">Parul Gulati</p>
                <p className="text-sm font-semibold">
                  It wasn't easy starting something on my own. Especially in a
                  category that waseither seen as a mere fashion accessory or
                  spoken about in hush voices to avoidgarnering attention. I
                  remember struggling to simply build awareness about
                  how‘normal’ it could be to use hair extensions. Most saw them
                  as a taboo topic, anequivalent to wigs or simply shrugged off
                  the idea in disgust. But I knew fromthe time I wore my first
                  set of extensions that I loved them and could clearlysee in
                  them the potential to help thousands. To me, hair extensions
                  were a wayof spreading joy, building confidence and
                  celebrating freedom in one of themost basic ways possible. I
                  wear mine with a lot of pride and want to ensurethat all those
                  who wear them do the same.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex flex-col justify-center">
          <div className="md:flex w-[93%] gap-8 md:ml-12 ml-[14px] md:pt-0 pt-3">
            <img src="/images/about6.webp" alt="" />
            <div className="md:w-[50%]">
              <img src="/images/about7.webp" alt="" />
              <p className="text-[25px] md:text-[36px] font-semibold pt-8">
                Building The Nish Hair Team
              </p>
              <p className="text-[17px] mt-3 mb-6">
                We are a brand made for women by women, and 90% of our team is
                women! We nurture a culture of inclusivity and respect, reward
                hard work and value open mindedness, courage, compassion and a
                belief in the limitless potential of all.What began as a dream
                of one and team of two with Parul and her mother stitching each
                piece of hair extensions themselves, has now grown into a high
                performing and dynamic family. Our core team works out of a
                small yet cozy office cum manufacturing space in Mumbai where
                creativity and hair always take centre stage. There is always
                something to do and what we love most is that we do it with
                flair.
              </p>
              <a href="/" className="underline underline-offset-4">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] flex md:flex-col justify-center mt-10 mb-32 md:ml-12 ml-[6px]">
        <div className="flex flex-col w-[95%] ">
          <p className="text-[25px] md:text-[36px] font-semibold">Nish Hair Extensions</p>
          <p className="text-[17px] py-5">
            While the Nish Hair range has grown and expanded into creating all
            things hair, the heart and soul of the brand remains our range of
            premium quality human hair extensions.Each extension is made with
            100% human hair, hand selected and stitched to perfection. We
            believe in practicing integrity, honesty and quality in all that we
            do, making sure that each process from sourcing to production is
            done in a clean, safe and ethical manner. Being passionate about
            hair and understanding the confidence it can instill, we have
            meticulously crafted each step to ensure the extensions you get are
            premium quality, soft and extremely long lasting.
          </p>
          <a href="/" className="underline underline-offset-4">Shop Now</a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
