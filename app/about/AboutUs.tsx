import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
    <section className="bg-white ">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg ">
            <h2 className="mb-4 text-lg lg:text-4xl tracking-tight font-extrabold text-gray-900 ">Litha@Work - Your Ultimate Immigration and Recruitment Solution</h2>
            <p className="mb-4">Are you seeking comprehensive immigration and recruitment services? Look no further! At Litha@Work, we specialize in offering expert consultancy for all matters related to immigration in the Republic of South Africa, covering various types of visas.</p>
            <p>We are committed to providing you with top-notch legal advice and unwavering guidance throughout the immigration process. Our dedicated team ensures the dispensation of accurate and reliable information to help you achieve your immigration goals seamlessly.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <Image className="w-full rounded-lg" src="/about1.jpg" width={468} height={558} alt="litha"/>
            <Image className="mt-4 w-full lg:mt-10 rounded-lg" src="/about2.jpg" width={440} height={558} alt="litha"/>
        </div>
    </div>
</section>
  )
}

export default AboutUs