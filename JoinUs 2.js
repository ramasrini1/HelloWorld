/** @jsx jsx */
import { Link } from "gatsby";
import { jsx } from "theme-ui";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import  './JoinUs.css';

function JoinUs() {
  let myVar = "cool";
  const {platinumImage1, goldImage1, headerImage, memberImage1, memberImage2, memberImage3, memberImage4, memberImage5, memberImage6, advImage, newsLetterImage} = useStaticQuery(graphql`
    query JoinUsPageQuery {
      headerImage: file(relativePath: { eq: "about/ab1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      advImage: file(relativePath: { eq: "joinus/adv.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      memberImage1: file(relativePath: { eq: "about/1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 768, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      memberImage2: file(relativePath: { eq: "about/2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 768, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      memberImage3: file(relativePath: { eq: "about/3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 768, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      memberImage4: file(relativePath: { eq: "about/4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 768, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      memberImage5: file(relativePath: { eq: "about/5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 768, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      memberImage6: file(relativePath: { eq: "about/6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 768, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      platinumImage1: file(relativePath: { eq: "about/logo1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 768, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      goldImage1: file(relativePath: { eq: "about/logo2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 768, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      newsLetterImage: file(relativePath: { eq: "background/3n.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 768, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  
  return (
    <>
      <div className="relative md:h-150 sm:h-120 h-120 overflow-hidden">
        <Img
          style={{ position: "absolute" }}
          className="absolute object-cover object-center h-full w-full"
          fluid={advImage.childImageSharp.fluid}
        />
        <div className="absolute flex items-center justify-center w-full h-full p-5">
          <div className="flex flex-col items-center">
            <h3 className="lg:text-6xl sm:text-5xl text-4xl font-semibold  text-white">
              Join Us
            </h3>
            <p className="sm:text-2xl text-base text-centers font-medium text-white mt-1">
              Make Your Mark
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="main-container sm:my-24 my-8">
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-600 mt-8 text-center sm:text-xl text-sm">
              Check out the following programs to join our fight against
              corruption.
            </p>
          </div>
          <div>&nbsp;</div>
          <div className="grid grid-cols-5 gap-4">
            <div className="bg-gray-200 rounded-xl p-6">
              <div className="text-gray-800 leading-relaxed">
                Become A Pledge
              </div>
              <div className="text-gray-400 leading-relaxed">
                Join our community of Pledges by taking our &quot;IEJL Oath to
                Ethical Commerce.&quot;
              </div>

              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div align="center">
                <a
                  href="https://iejl.org/Medium_page/details/6"
                  className="text-indigo-500 px-4 py-3 bg-gray-300 rounded hover:bg-indigo-500 
                          hover:text-white transition duration-300 inline-flex items-center justify-center leading-snug"
                >Read More
                </a>
              </div>
            </div>

            <div className="bg-gray-200 rounded-xl p-6">
              <div className="text-gray-800 leading-relaxed">
                Awards Program
              </div>
              <div className="text-gray-400 leading-relaxed">
                The Awards Program awards Pledges points for increasing their
                awareness of ethical commerce. More points equals more benefits!
              </div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div align="center">
                <a
                  href="https://iejl.org/Medium_page/details/7"
                  className="text-indigo-500 px-4 py-3 bg-gray-300 rounded hover:bg-indigo-500 
                          hover:text-white transition duration-300 inline-flex items-center justify-center leading-snug"
                >Read More
                </a>
              </div>
            </div>

            <div className="bg-gray-200 rounded-xl p-6">
              <div className="text-gray-800 leading-relaxed">Job Connect</div>
              <div className="text-gray-400 leading-relaxed">
                The IEJL Job Connect website provides employers access to a
                community of ethically conscious job seekers.
              </div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>

              <div align="center">
                <a
                  href="https://iejl.org/Medium_page/details/8"
                  className="text-indigo-500 px-4 py-3 bg-gray-300 rounded hover:bg-indigo-500 
                          hover:text-white transition duration-300 inline-flex items-center justify-center leading-snug"
                >Read More
                </a>
              </div>
            </div>

            <div className="bg-gray-200 rounded-xl p-6">
              <div className="text-gray-800 leading-relaxed">
                Join A Local Chapter
              </div>
              <div className="text-gray-400 leading-relaxed">
                IEJL establishes Chapters in cities around the world to help in
                the fight against corruption.
              </div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div align="center">
                <a
                  href="https://iejl.org/Medium_page/details/9"
                  className="text-indigo-500 px-4 py-3 bg-gray-300 rounded hover:bg-indigo-500 
                          hover:text-white transition duration-300 inline-flex items-center justify-center leading-snug"
                >Read More
                </a>
              </div>
            </div>

            <div className="bg-gray-200 rounded-xl p-6">
              <div className="text-gray-800 leading-relaxed">
                Pledge Discounts
              </div>
              <div className="text-gray-400 leading-relaxed">
                IEJL partners with businesses to offer deals and discounts to
                our community of Pledges.
              </div>

              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div align="center">
                <a
                  href="https://iejl.org/Medium_page/details/10"
                  className="text-indigo-500 px-4 py-3 bg-gray-300 rounded hover:bg-indigo-500 
                            hover:text-white transition duration-300 inline-flex items-center justify-center leading-snug"
                >Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="main-container sm:my-24 my-12">
          <div>
            <h2 className="sm:text-4xl text-3xl text-yellow-500 text-center sm:mt-12 mt-7">
              Platinum
            </h2>
          </div>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-8 gap-5 mt-5 pb-8 pt-5 border-t">
            <div className="border border-gray-300">
              <div className="border p-1">
                <Img 
                  className="object-cover object-center w-full h-72" 
                  fluid={platinumImage1.childImageSharp.fluid} 
                />
              </div>
              <div>
                <p className="bg-yellow-500 text-white text-lg text-center p-1">James Valle & Company , CAPs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
      <div className="main-container sm:my-24 my-12">
        <h2 className="sm:text-4xl text-3xl text-yellow-500 text-center sm:mt-12 mt-7">
            Gold
        </h2>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-8 gap-5 mt-5 pb-8 pt-5 border-t">
          <div className="border border-gray-300">
            <div className="border">
              <Img 
                className="object-cover object-center w-full h-72" 
                fluid={goldImage1.childImageSharp.fluid} 
              />
            </div>
            <div>
              <p className="bg-yellow-500 text-white text-lg text-center p-1">James Valle & Company , CAPs</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="relative bg-navy lg:h-72 sm:h-64 h-56 overflow-hidden">
        
        <div className="absolute flex items-center justify-center w-full h-full p-5">
          <div className="flex flex-col items-center max-w-4xl mx-auto space-y-6">
            <h3 className="lg:text-4xl sm:text-3xl text-2xl text-center font-medium text-white lg:leading-snug sm:leading-snug leading-snug">
              Support us in creating a culture of ethical commerce with our future leaders!
            </h3>
              <a href="/" className="bg-yellow-500 text-white sm:text-base text-sm uppercase mt-1 px-6 sm:py-3 py-2 rounded-md text-center hover:bg-yellow-600 focus:outline-none">
                Join Today
              </a>          
          </div>
        </div>
    </div>

    <div className="relative lg:h-80 sm:h-64 h-56 overflow-hidden">
      <Img 
        style={{position: "absolute"}}  
        className="absolute object-cover  h-full w-full"  
        fluid={newsLetterImage.childImageSharp.fluid} 
      />
      <div className="absolute bg-white bg-opacity-80 flex items-center justify-center w-full h-full p-5">
        <div className="flex flex-col items-center">
          <h3 className="lg:text-4xl sm:text-4xl text-2xl font-thin text-gray-400">Newsletter</h3>
          <p className="sm:text-base text-sm sm:font-medium text-black-hakkei mt-2 text-center">
            Keep up with our always upcoming news and updates. Enter your e-mail and subscribe to our newsletter.
          </p>
          <form className="w-full mt-8">
            <div className="relative flex justify-end rounded-full  bg-white border-gray-300 w-full">
              <input type="email" className="absolute w-full h-full rounded-full border sm:pl-8 sm:pr-48 pr-36 pl-4 bg-transparent focus:border-yellow-500 focus:outline-none" />
              <button type="button" className="float-right bg-yellow-500 right-0 text-white sm:text-base text-sm uppercase sm:px-6 sm:py-3 px-3 py-2 rounded-full text-center hover:bg-yellow-600 focus:outline-none">
                Find out more
              </button> 
            </div>
          </form>            
        </div>
      </div>
    </div>

      





      
     
    </>
  );
}

export default JoinUs;