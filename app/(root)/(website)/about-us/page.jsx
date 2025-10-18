import WebsiteBreadcrumb from '@/components/Application/Website/WebsiteBreadcrumb'
import React from 'react'

const breadcrumb = {
  title: 'About',
  links: [
    { label: 'About' },
  ]
}

const AboutUs = () => {
  return (
    <div>
      <WebsiteBreadcrumb props={breadcrumb} />
      <div className='lg:px-40 px-5 py-20'>
        <h1 className='text-xl font-semibold mb-3'>About Us</h1>
        <p>Welcome to <b>BitterSweetScent</b> — your perfect destination for premium coffee pods that bring café-quality aroma and flavor straight to your home.</p>

        <p>
          We are passionate about curating the finest coffee experiences from world-renowned brands like <b>Starbucks</b>, <b>Nespresso</b>, and <b>Marks &amp; Spencer (M&amp;S)</b>. Whether you crave the bold intensity of an espresso, the smooth balance of a lungo, or the creamy indulgence of a latte, we’ve got the perfect pod for every mood and moment.
        </p>

        <p className='mt-5'>At BitterSweetScent, we’re driven by our love for coffee and our commitment to:</p>

        <ul className='list-disc ps-10 mt-3'>
          <li>
            <b>Exceptional Quality:</b> We handpick only authentic, high-grade pods to ensure every cup delivers the rich taste and aroma you deserve.
          </li>

          <li>
            <b>Affordability Without Compromise:</b> Great coffee shouldn’t come at a premium. We offer competitive pricing so you can enjoy luxury coffee every day.
          </li>

          <li>
            <b>Fast &amp; Reliable Delivery:</b> Your morning brew should never have to wait. Our efficient shipping ensures your favorite pods reach you quickly and safely.
          </li>

          <li>
            <b>Eco-Conscious Choices:</b> We care about sustainability. Many of our products come from recyclable or eco-friendly pod lines, helping you sip responsibly.
          </li>

          <li>
            <b>Customer Care:</b> Your satisfaction fuels us. From browsing to brewing, our team is dedicated to making your shopping experience smooth and delightful.
          </li>
        </ul>

        <p className='mt-3'>
          As coffee lovers ourselves, we know that every cup tells a story — of comfort, energy, and connection. That’s why we’re constantly expanding our range, introducing new blends, and listening to our community to serve you better.
        </p>

        <p className='mt-3'>
          Thank you for choosing <b>BitterSweetScent</b>. Let’s make every sip unforgettable — rich in flavor, warmth, and aroma.
        </p>
      </div>
    </div>
  )
}

export default AboutUs
