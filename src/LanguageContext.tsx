/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'bn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const translations = {
  en: {
    // Navbar
    home: 'Home',
    properties: 'Flats',
    land: 'Land',
    about: 'About',
    contact: 'Contact',
    language: 'Language',
    
    // Hero
    heroBadge: 'Best Developer in Gazipur',
    heroTitle: 'Your Trusted Partner',
    heroTitleSpan: 'in Property.',
    heroSubtitle: 'আপনার নিরাপদ বিনিয়োগের সঠিক ঠিকানা',
    heroDescription: 'Find the perfect ready flat or prime land plot in prime locations of Gazipur. Quality construction and transparent documentation.',
    viewFlats: 'View Ready Flats',
    viewLand: 'View Land Plots',
    bookVisit: 'Book a Visit',
    contactUs: 'Contact Us',
    projectsCount: '200+',
    projectsLabel: 'Projects',
    projectsDesc: 'Building landmarks and happiness in Gazipur since 2010.',
    
    // About
    aboutBadge: 'About Faysal Real Estate',
    aboutTitle: 'Building Trust,',
    aboutTitleSpan: 'Brick by Brick.',
    aboutDescription: 'Since 2010, we have been shaping the skyline of Gazipur with a commitment to quality and integrity. We leverage modern technology and traditional values to deliver homes that last generations.',
    statProjects: 'Completed Projects',
    statFamilies: 'Happy Families',
    statYears: 'Years Experience',
    statApproved: 'RAJUK Approved',
    trustTitle: 'Trust & Transparency',
    trustDesc: 'All our documents are strictly vetted. We provide 100% legal clearance before any transaction.',
    deliveryTitle: 'On-time Delivery',
    deliveryDesc: 'We value your time. Our handover dates are realistic and strictly followed.',
    locationTitle: 'Premium Locations',
    locationDesc: 'We select locations that offer the best mix of tranquility, connectivity, and investment value.',
    qualityTitle: 'Superior Quality',
    qualityDesc: 'From foundation to finishing, we use high-grade materials and skilled engineering.',
    
    // Properties (Flats)
    propertiesBadge: 'Featured Listings',
    propertiesTitle: 'Ready Flats',
    propertiesTitleSpan: 'in Prime Gazipur',
    upcomingTitle: 'Upcoming Projects',
    upcomingTitleSpan: 'Handover Soon',
    upcomingDescription: 'Be the first to secure units in our prestige upcoming developments. Modern designs and premium amenities.',
    propertiesDescription: 'Browse our curated collection of ready-to-move apartments. Each project is selected for its superior location and build quality.',
    
    // Land Section
    landBadge: 'Investment Opportunities',
    landTitle: 'Prime Land Plots',
    landTitleSpan: 'for Sale',
    landDescription: 'Secure your future with prime land in growing areas of Gazipur. Fully demarcated, boundary-walled, and ready for immediate registry.',
    landSizeLabel: 'Size',
    landFacingLabel: 'Facing',
    landStatusLabel: 'Registry',
    registryReady: 'Ready',
    katha: 'Katha',

    cantFindTitle: "Can't find what you're looking for?",
    cantFindDesc: 'We have several other upcoming projects and exclusive ready units that are not listed here. Get in touch with our sales team for a personalized consultation.',
    textUsNow: 'Text Us Now',
    propertyData: [
      {
        id: 'prop-1',
        name: 'Amanta Chowdhury Tower',
        location: 'Dakkhin Chayabithi, Joydebpur, Gazipur',
        price: 'Contact for Best Price',
        size: '1400-1450 sqft',
        beds: 3,
        baths: 3,
        balconies: 2,
        floor: '5th Floor',
        facing: 'South-Facing',
        status: 'Ready',
        features: ['Parking', '2 Lifts', 'Generator', '24/7 Security', 'Substation'],
        imageUrl: 'https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/715590188_994771589764773_7830774232884910077_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=gHl1vqGwRxAQ7kNvwFYExm7&_nc_oc=Adqucsb5NQ2FXNEW4LecK7NbEXaqfTKGCWbfzF9Qn8ORFSiJCMEtRCB5sl5_9UJrAv0&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=nYcgEBsRGC1DrVSrWjyNjA&_nc_ss=7b2a8&oh=00_Af9SompabJ7gOiJOkqBWJAX-kSXlWgVwcMw3m3ouxdY2rA&oe=6A25BE25',
        images: [
          'https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/715590188_994771589764773_7830774232884910077_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=gHl1vqGwRxAQ7kNvwFYExm7&_nc_oc=Adqucsb5NQ2FXNEW4LecK7NbEXaqfTKGCWbfzF9Qn8ORFSiJCMEtRCB5sl5_9UJrAv0&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=nYcgEBsRGC1DrVSrWjyNjA&_nc_ss=7b2a8&oh=00_Af9SompabJ7gOiJOkqBWJAX-kSXlWgVwcMw3m3ouxdY2rA&oe=6A25BE25',
          'https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/715516705_994771656431433_2753176567845409024_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=OOL5IB_Nle4Q7kNvwF_al4M&_nc_oc=AdrctLlwGYG6l8lTQlC2cGup-1ATqjwvi1kh92oTeriQIjeB-tucf_Jw--9n6a65Zlk&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=nYcgEBsRGC1DrVSrWjyNjA&_nc_ss=7b2a8&oh=00_Af8mGbCqtVwpRIaG8FZJq_0QLxpWv_uXmrfLtbLZijR_2g&oe=6A25A036',
          'https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/714085149_994771603098105_5797864671435428014_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=WgWwEZ6ooM4Q7kNvwFxm8eG&_nc_oc=AdrBvHnHATZmJMRDBc-KndQdIlv5Sayrs48_xigUwPv9C_KMPa19LFCY4bcf3WOdDC8&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=nYcgEBsRGC1DrVSrWjyNjA&_nc_ss=7b2a8&oh=00_Af-bS5zdSaYAQh7VSPn30-2HGHJ7ZFAY_oSC7AxPAJ0WLw&oe=6A25C257',
          'https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/715540329_994780133097252_891881290888773583_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3ZozSlQ0NOIQ7kNvwEV9Mwg&_nc_oc=Ado2aBcoM_MTd2MmjU8mediYrc4Vv_PTe2Hij9Wqoajc0jCQdbHIXmibzSKULesvfkw&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=nYcgEBsRGC1DrVSrWjyNjA&_nc_ss=7b2a8&oh=00_Af_qZW5kqG5iEWyEqjYLD5zSPv1k_YSqF0wvSZbOBN0oUw&oe=6A25BF92'
        ],
        googleMapsUrl: 'https://maps.google.com/?q=Joydebpur+Gazipur',
      },
      {
        id: 'prop-3',
        name: 'South Breeze at Jorpukur',
        location: 'Jorpukur, Joydebpur, Gazipur',
        price: 'Contact for Best Price',
        size: '1550-1600 sqft',
        beds: 3,
        baths: 3,
        balconies: 1,
        floor: '7th Floor',
        facing: 'East-Facing',
        status: 'Ready',
        features: ['2 Lifts', '24/7 Security', 'Parking', 'Generator', 'Substation'],
        imageUrl: 'https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/714383579_995889942986271_8505767854631164332_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ETsexLEK7s8Q7kNvwEhWb7z&_nc_oc=AdpCstDeM0Gpywa_2dwkRjXo-IoBMvrb7MoGOjJ_QmGwvxSLZTWKlYoc2D6K45-T2XQ&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=M0ESZUbMYYCkYEx0cjSSKw&_nc_ss=7b2a8&oh=00_Af8CqjN6l17AFeDQvGAOx8E0YXswJvVwALyP3ATEskQYFw&oe=6A274B99',
        images: [
          'https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/714383579_995889942986271_8505767854631164332_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ETsexLEK7s8Q7kNvwEhWb7z&_nc_oc=AdpCstDeM0Gpywa_2dwkRjXo-IoBMvrb7MoGOjJ_QmGwvxSLZTWKlYoc2D6K45-T2XQ&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=M0ESZUbMYYCkYEx0cjSSKw&_nc_ss=7b2a8&oh=00_Af8CqjN6l17AFeDQvGAOx8E0YXswJvVwALyP3ATEskQYFw&oe=6A274B99',
          'https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/715291267_995889886319610_6385127719888871707_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=pq63u7lxAaQQ7kNvwFVvULP&_nc_oc=Adrwh17MDlzDKKyhGzjOdFePmqlzJcaExP-bctVMU-Ze5iX7W1--BVYqaRBys5gmS9E&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=EAGTrOY6oEddOafuvRSu-A&_nc_ss=7b2a8&oh=00_Af-r_GWz7FTN5dMhT6IIhpFqwG9PXIaEK0i6FT_M-6r2Jg&oe=6A2763EA',
          'https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/714852639_995890022986263_447910061425228364_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=B80QU4LWGCQQ7kNvwGXlaMz&_nc_oc=AdrfjcEvUIwTD9sW1QgfoLbvhdnp313847Gz9X9F2O-oIBOitJQRXk5EDF0SS1lP35w&_nc_zt=23&_nc_ht=scontent.fdac138-1.fna&_nc_gid=KERi_56c2ZfLQ-C-fIEyUw&_nc_ss=7b2a8&oh=00_Af-ztnjc5NF4kFHmFSl0-ekmghT8Zs8IaPBPaAYZWfAF_g&oe=6A2760B4',
          'https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/714723251_995890082986257_5173604162516039693_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=REXRkWyszgsQ7kNvwHn3tjh&_nc_oc=AdqbruAVvQwH0AfrB6JXkgb-aTF_bmoPEE6zIs_fkF-QT-xZlcdPw_29PHl4ZLzQnbU&_nc_zt=23&_nc_ht=scontent.fdac138-1.fna&_nc_gid=zTf1FepCggbSacdJoN-6Rw&_nc_ss=7b2a8&oh=00_Af9v5R8A7-b1p8zUNHfevmCWBSyFVqZAPHAexqXdLwYVJg&oe=6A276133',
          'https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/714851494_995890059652926_9021158554923691026_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wHvjxODm6FUQ7kNvwHQiv7r&_nc_oc=AdqrpPzuG5_YjPrS-j2eqs4Rus84cqZIaZwtAjPL4ZrlwH7O7TZotZLrywbBi-6OKig&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=Fm4ifkuI-y0YKt0ygJIubQ&_nc_ss=7b2a8&oh=00_Af-W7PVl3x76WFZjfAd6A6fHRZLp-PFeRT3CPc6CSwbyLg&oe=6A275521',
          'https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/716431210_995889889652943_8564696464819572722_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=JF5T_TpYgrUQ7kNvwEBmGo5&_nc_oc=AdqkW9e7aZgseYuuMaCYDa0EhKi1Sb7ahbT_KUIEYXrE4uvUODeF28BE9NKkTWDDao0&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=HxEv2GrIE4OPGh3eadm-nQ&_nc_ss=7b2a8&oh=00_Af-mfj6Nrq4siZLLeaUEc7huGP9kM_8OKDHWWWbr1bcAgA&oe=6A2751F5'
        ],
        googleMapsUrl: 'https://maps.google.com/?q=Board+Bazar+Gazipur',
      },
    ],
    landData: [
      {
        id: 'land-1',
        name: 'Prime Plot in Nilerpara, Gazipur',
        location: 'Ward 30, Nilerpara, Gazipur',
        price: 'Contact for Best Price',
        size: '23 Katha',
        facing: 'South',
        status: 'Ready for Registry',
        features: ['Boundary Wall', 'Electric Connection', 'Wide Road Access', 'Home with 2 rooms and a balcony', 'Attached Bathroom'],
        imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/014/445/766/small/land-plot-for-building-house-aerial-view-land-field-with-pins-pin-location-for-housing-subdivision-residential-development-owned-sale-rent-buy-or-investment-home-or-house-expand-the-city-suburb-free-photo.JPG',
        googleMapsUrl: 'https://maps.google.com/?q=Rajendrapur+Gazipur',
      },
      {
        id: 'land-2',
        name: 'Prime Plot in Faukal, Gazipur',
        location: 'Ward 24, Faukal, Gazipur',
        price: 'Contact for Best Price',
        size: '6 Katha',
        facing: 'East',
        status: 'Ready for Registry',
        features: ['Boundary Wall', 'Wide Road Access'],
        imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/014/445/766/small/land-plot-for-building-house-aerial-view-land-field-with-pins-pin-location-for-housing-subdivision-residential-development-owned-sale-rent-buy-or-investment-home-or-house-expand-the-city-suburb-free-photo.JPG',
        googleMapsUrl: 'https://maps.google.com/?q=Bhawal+National+Park+Gazipur',
      },
      {
        id: 'land-3',
        name: 'Prime Plot in Bhanua, Gazipur',
        location: 'Bhanua, Gazipur',
        price: 'Contact for Best Price',
        size: '6 Katha',
        facing: 'South',
        status: 'Ready for Registry',
        features: ['30 Feet Wide Road', 'Boundary Wall'],
        imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/014/445/766/small/land-plot-for-building-house-aerial-view-land-field-with-pins-pin-location-for-housing-subdivision-residential-development-owned-sale-rent-buy-or-investment-home-or-house-expand-the-city-suburb-free-photo.JPG',
        googleMapsUrl: 'https://maps.google.com/?q=Bhanua+Gazipur',
      },
      {
        id: 'land-4',
        name: 'Agricultural Land in Nilerpara, Gazipur',
        location: 'Ward 30, Nilerpara, Gazipur',
        price: 'Contact for Best Price',
        size: '24 Katha',
        facing: 'South',
        status: 'Ready for Registry',
        features: ['Agricultural Land', 'Specially for Rice Cultivation', 'Irrigation System', 'Electric Connection', 'Wide Access Road'],
        imageUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1200',
        googleMapsUrl: 'https://maps.google.com/?q=Rajendrapur+Gazipur',
      },
    ],
    beds: 'Beds',
    baths: 'Baths',
    size: 'Size',
    viewDetails: 'View Details',
    location: 'Location',
    statusReady: 'Ready',
    statusSoon: 'Handover Soon',
    
    // Contact
    contactBadge: 'Contact Us',
    contactTitle: "Let's Discuss",
    contactTitleSpan: 'Your New Home.',
    contactDescription: 'Visit our office or give us a call. We are ready to help you find your dream flat in Gazipur.',
    visitOffice: 'Visit Office',
    officeAddressFull: 'F-214, O.K Tower Ground Floor (North side of Gazipur Govt. women\'s College), Gazipur, Bangladesh.',
    callAnywhere: 'Call Anywhere',
    salesLabel: 'Sales',
    officeLabel: 'Office',
    emailLabel: 'Email',
    emailValue: 'ahmadulkabir70@gmail.com',
    phoneNumber: '01711262623',
    phoneNumberFormatted: '01711-262623',
    officePhoneNumber: '01715880055',
    businessHours: 'Business Hours',
    hoursDays: 'Sat - Fri: 9:00 AM - 10:00 PM',
    sendMessage: 'Send a Message',
    fullName: 'Full Name',
    phoneNum: 'Phone Number',
    interest: 'Interest',
    interestOption1: 'Ready Flat (3 Bed)',
    interestOption2: 'Ready Flat (2 Bed)',
    interestOption3: 'Commercial Space',
    interestOption4: 'General Inquiry',
    messagePlaceholder: 'Tell us about your requirements...',
    sendRequest: 'Send Request',
    
    // Footer
    footerDescription: 'Preferred partner for high-quality ready flats and commercial spaces in Joydebpur and Gazipur area.',
    quickLinks: 'Quick Links',
    homeLink: 'Home',
    propertiesLink: 'Properties',
    aboutLink: 'About Us',
    contactLink: 'Contact',
    popularAreas: 'Popular Areas',
    flatsIn: 'Flats in',
    connectWithUs: 'Connect With Us',
    office: 'Office',
    officeText: 'F-214, O.K Tower Ground Floor (North side of Gazipur Govt. women\'s College), Gazipur, Bangladesh.',
    allRightsReserved: 'All rights reserved.',
    createdBy: 'This website created by',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    contactWhatsApp: 'Contact on WhatsApp',
  },
  bn: {
    // Navbar
    home: 'হোম',
    properties: 'ফ্ল্যাট',
    land: 'জমি',
    about: 'সম্পর্কে',
    contact: 'যোগাযোগ',
    language: 'ভাষা',
    
    // Hero
    heroBadge: 'গাজীপুরের সেরা ডেভেলপার',
    heroTitle: 'আপনার স্বপ্নের প্রপার্টি',
    heroTitleSpan: 'খুঁজে পাওয়ার বিশ্বস্ত সঙ্গী।',
    heroSubtitle: 'আপনার নিরাপদ বিনিয়োগের সঠিক ঠিকানা',
    heroDescription: 'গাজীপুরের প্রাইম লোকেশনে আপনার স্বপ্নের ফ্ল্যাট বা আকর্ষণীয় প্লট খুঁজে নিন। মানসম্মত নির্মাণ এবং স্বচ্ছ নথিপত্রের নিশ্চয়তা।',
    viewFlats: 'ফ্ল্যাটগুলো দেখুন',
    viewLand: 'জমির প্লটগুলো দেখুন',
    bookVisit: 'পরিদর্শনের সময় নির্ধারণ করুন',
    contactUs: 'যোগাযোগ করুন',
    projectsCount: '২০০+',
    projectsLabel: 'প্রকল্প',
    projectsDesc: '২০১০ সাল থেকে গাজীপুরে দৃষ্টিনন্দন স্থাপনা ও সুখের নীড় নির্মাণে আমরা আপনার বিশ্বস্ত সঙ্গী।',
    
    // About
    aboutBadge: 'ফয়সাল রিয়েল এস্টেট সম্পর্কে',
    aboutTitle: 'আস্থা তৈরি করি,',
    aboutTitleSpan: 'ইটের পর ইট গেঁথে।',
    aboutDescription: '২০১০ সাল থেকে, আমরা গুণমান এবং সততার প্রতিশ্রুতি দিয়ে গাজীপুরের দৃশ্যপট পরিবর্তন করে চলেছি। আমরা আধুনিক প্রযুক্তি এবং ঐতিহ্যবাহী মূল্যবোধ ব্যবহার করে প্রজন্মের পর প্রজন্ম টিকে থাকার মতো ঘর নির্মাণ করি।',
    statProjects: 'সম্পন্ন প্রকল্প',
    statFamilies: 'সুখী পরিবার',
    statYears: 'বছরের অভিজ্ঞতা',
    statApproved: 'রাজউক (RAJUK) অনুমোদিত',
    trustTitle: 'আস্থা ও স্বচ্ছতা',
    trustDesc: 'আমাদের সকল নথিপত্র কঠোরভাবে যাচাইকৃত। আমরা যে কোনো লেনদেনের আগে শতভাগ আইনি ছাড়পত্র নিশ্চিত করি।',
    deliveryTitle: 'সঠিক সময়ে হস্তান্তর',
    deliveryDesc: 'আমরা আপনার সময়ের মূল্য দিই। আমাদের হস্তান্তরের তারিখগুলো বাস্তবসম্মত এবং তা কঠোরভাবে অনুসরণ করা হয়।',
    locationTitle: 'সেরা অবস্থান',
    locationDesc: 'আমরা এমন অবস্থান নির্বাচন করি যা প্রশান্তি, যাতায়াত এবং বিনিয়োগ মূল্যের সেরা সমন্বয় প্রদান করে।',
    qualityTitle: 'উন্নত মান',
    qualityDesc: 'ভিত্তি থেকে ফিনিশিং পর্যন্ত, আমরা উচ্চমানের সামগ্রী এবং দক্ষ প্রকৌশল ব্যবহার করি।',
    
    // Properties (Flats)
    propertiesBadge: 'বিশেষ তালিকা',
    propertiesTitle: 'প্রস্তুত ফ্ল্যাট',
    propertiesTitleSpan: 'সেরা গাজীপুরে',
    upcomingTitle: 'আসন্ন প্রকল্প',
    upcomingTitleSpan: 'দ্রুত হস্তান্তর',
    upcomingDescription: 'আমাদের আসন্ন অনন্য প্রকল্পগুলোতে আগেভাগেই বুকিং দিয়ে আপনার পছন্দের ইউনিটটি নিশ্চিত করুন। আধুনিক ডিজাইন এবং প্রিমিয়াম সুযোগ-সুবিধার সমন্বয়।',
    propertiesDescription: 'বসবাসের জন্য প্রস্তুত আমাদের বাছাইকৃত ফ্ল্যাটগুলো দেখুন। প্রতিটি প্রকল্প এর আধুনিক নির্মাণশৈলী এবং যাতায়াত ব্যবস্থার কথা মাথায় রেখে নির্বাচিত।',
    
    // Land Section
    landBadge: 'বিনিয়োগের সুযোগ',
    landTitle: 'সেরা জমির প্লট',
    landTitleSpan: 'বিক্রয়ের জন্য',
    landDescription: 'গাজীপুরের ক্রমবর্ধমান এলাকায় জমি কিনে আপনার ভবিষ্যৎ সুরক্ষিত করুন। সীমানা প্রাচীরসহ সম্পূর্ণ চিহ্নিত এবং দ্রুত রেজিস্ট্রির জন্য প্রস্তুত।',
    landSizeLabel: 'আয়তন',
    landFacingLabel: 'দিক',
    landStatusLabel: 'রেজিস্ট্রি',
    registryReady: 'প্রস্তুত',
    katha: 'কাঠা',
    
    cantFindTitle: 'আপনি যা খুঁজছেন তা কি খুঁজে পাচ্ছেন না?',
    cantFindDesc: 'আমাদের আরও বেশকিছু আসন্ন প্রকল্প এবং বিশেষ প্রস্তুত ইউনিট রয়েছে যা এখানে তালিকাভুক্ত হয়নি। ব্যক্তিগত পরামর্শের জন্য আমাদের বিক্রয় দলের সাথে যোগাযোগ করুন।',
    textUsNow: 'আমাদের মেসেজ করুন',
    propertyData: [
      {
        id: 'prop-1',
        name: 'আমানতা চৌধুরী টাওয়ার',
        location: 'দক্ষিণ ছায়াবিথি, জয়দেবপুর, গাজীপুর',
        price: 'সেরা মূল্যের জন্য যোগাযোগ করুন',
        size: '১৪০০-১৪৫০ বর্গফুট',
        beds: 3,
        baths: 3,
        balconies: 2,
        floor: '৫ম তলা',
        facing: 'দক্ষিণমুখী',
        status: 'প্রস্তুত',
        features: ['পার্কিং', '২টি লিফট', 'জেনারেটর', '২৪/৭ নিরাপত্তা', 'সাব-স্টেশন'],
        imageUrl: 'https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/715590188_994771589764773_7830774232884910077_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=gHl1vqGwRxAQ7kNvwFYExm7&_nc_oc=Adqucsb5NQ2FXNEW4LecK7NbEXaqfTKGCWbfzF9Qn8ORFSiJCMEtRCB5sl5_9UJrAv0&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=nYcgEBsRGC1DrVSrWjyNjA&_nc_ss=7b2a8&oh=00_Af9SompabJ7gOiJOkqBWJAX-kSXlWgVwcMw3m3ouxdY2rA&oe=6A25BE25',
        images: [
          'https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/715590188_994771589764773_7830774232884910077_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=gHl1vqGwRxAQ7kNvwFYExm7&_nc_oc=Adqucsb5NQ2FXNEW4LecK7NbEXaqfTKGCWbfzF9Qn8ORFSiJCMEtRCB5sl5_9UJrAv0&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=nYcgEBsRGC1DrVSrWjyNjA&_nc_ss=7b2a8&oh=00_Af9SompabJ7gOiJOkqBWJAX-kSXlWgVwcMw3m3ouxdY2rA&oe=6A25BE25',
          'https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/715516705_994771656431433_2753176567845409024_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=OOL5IB_Nle4Q7kNvwF_al4M&_nc_oc=AdrctLlwGYG6l8lTQlC2cGup-1ATqjwvi1kh92oTeriQIjeB-tucf_Jw--9n6a65Zlk&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=nYcgEBsRGC1DrVSrWjyNjA&_nc_ss=7b2a8&oh=00_Af8mGbCqtVwpRIaG8FZJq_0QLxpWv_uXmrfLtbLZijR_2g&oe=6A25A036',
          'https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/714085149_994771603098105_5797864671435428014_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=WgWwEZ6ooM4Q7kNvwFxm8eG&_nc_oc=AdrBvHnHATZmJMRDBc-KndQdIlv5Sayrs48_xigUwPv9C_KMPa19LFCY4bcf3WOdDC8&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=nYcgEBsRGC1DrVSrWjyNjA&_nc_ss=7b2a8&oh=00_Af-bS5zdSaYAQh7VSPn30-2HGHJ7ZFAY_oSC7AxPAJ0WLw&oe=6A25C257',
          'https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/715540329_994780133097252_891881290888773583_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3ZozSlQ0NOIQ7kNvwEV9Mwg&_nc_oc=Ado2aBcoM_MTd2MmjU8mediYrc4Vv_PTe2Hij9Wqoajc0jCQdbHIXmibzSKULesvfkw&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=nYcgEBsRGC1DrVSrWjyNjA&_nc_ss=7b2a8&oh=00_Af_qZW5kqG5iEWyEqjYLD5zSPv1k_YSqF0wvSZbOBN0oUw&oe=6A25BF92'
        ],
        googleMapsUrl: 'https://maps.google.com/?q=Joydebpur+Gazipur',
      },
      {
        id: 'prop-3',
        name: 'জোরপুকুরে সাউথ ব্রিজ',
        location: 'জোরপুকুর, জয়দেবপুর, গাজীপুর',
        price: 'সেরা মূল্যের জন্য যোগাযোগ করুন',
        size: '১৫৫০-১৬০০ বর্গফুট',
        beds: 3,
        baths: 3,
        balconies: 1,
        floor: '৭ম তলা',
        facing: 'পূর্বমুখী',
        status: 'প্রস্তুত',
        features: ['২টি লিফট', '২৪/৭ নিরাপত্তা', 'পার্কিং', 'জেনারেটর', 'সাব-স্টেশন'],
        imageUrl: 'https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/714383579_995889942986271_8505767854631164332_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ETsexLEK7s8Q7kNvwEhWb7z&_nc_oc=AdpCstDeM0Gpywa_2dwkRjXo-IoBMvrb7MoGOjJ_QmGwvxSLZTWKlYoc2D6K45-T2XQ&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=M0ESZUbMYYCkYEx0cjSSKw&_nc_ss=7b2a8&oh=00_Af8CqjN6l17AFeDQvGAOx8E0YXswJvVwALyP3ATEskQYFw&oe=6A274B99',
        images: [
          'https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/714383579_995889942986271_8505767854631164332_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ETsexLEK7s8Q7kNvwEhWb7z&_nc_oc=AdpCstDeM0Gpywa_2dwkRjXo-IoBMvrb7MoGOjJ_QmGwvxSLZTWKlYoc2D6K45-T2XQ&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=M0ESZUbMYYCkYEx0cjSSKw&_nc_ss=7b2a8&oh=00_Af8CqjN6l17AFeDQvGAOx8E0YXswJvVwALyP3ATEskQYFw&oe=6A274B99',
          'https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/715291267_995889886319610_6385127719888871707_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=pq63u7lxAaQQ7kNvwFVvULP&_nc_oc=Adrwh17MDlzDKKyhGzjOdFePmqlzJcaExP-bctVMU-Ze5iX7W1--BVYqaRBys5gmS9E&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=EAGTrOY6oEddOafuvRSu-A&_nc_ss=7b2a8&oh=00_Af-r_GWz7FTN5dMhT6IIhpFqwG9PXIaEK0i6FT_M-6r2Jg&oe=6A2763EA',
          'https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/714852639_995890022986263_447910061425228364_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=B80QU4LWGCQQ7kNvwGXlaMz&_nc_oc=AdrfjcEvUIwTD9sW1QgfoLbvhdnp313847Gz9X9F2O-oIBOitJQRXk5EDF0SS1lP35w&_nc_zt=23&_nc_ht=scontent.fdac138-1.fna&_nc_gid=KERi_56c2ZfLQ-C-fIEyUw&_nc_ss=7b2a8&oh=00_Af-ztnjc5NF4kFHmFSl0-ekmghT8Zs8IaPBPaAYZWfAF_g&oe=6A2760B4',
          'https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/714723251_995890082986257_5173604162516039693_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=REXRkWyszgsQ7kNvwHn3tjh&_nc_oc=AdqbruAVvQwH0AfrB6JXkgb-aTF_bmoPEE6zIs_fkF-QT-xZlcdPw_29PHl4ZLzQnbU&_nc_zt=23&_nc_ht=scontent.fdac138-1.fna&_nc_gid=zTf1FepCggbSacdJoN-6Rw&_nc_ss=7b2a8&oh=00_Af9v5R8A7-b1p8zUNHfevmCWBSyFVqZAPHAexqXdLwYVJg&oe=6A276133',
          'https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/714851494_995890059652926_9021158554923691026_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wHvjxODm6FUQ7kNvwHQiv7r&_nc_oc=AdqrpPzuG5_YjPrS-j2eqs4Rus84cqZIaZwtAjPL4ZrlwH7O7TZotZLrywbBi-6OKig&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=Fm4ifkuI-y0YKt0ygJIubQ&_nc_ss=7b2a8&oh=00_Af-W7PVl3x76WFZjfAd6A6fHRZLp-PFeRT3CPc6CSwbyLg&oe=6A275521',
          'https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/716431210_995889889652943_8564696464819572722_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=JF5T_TpYgrUQ7kNvwEBmGo5&_nc_oc=AdqkW9e7aZgseYuuMaCYDa0EhKi1Sb7ahbT_KUIEYXrE4uvUODeF28BE9NKkTWDDao0&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=HxEv2GrIE4OPGh3eadm-nQ&_nc_ss=7b2a8&oh=00_Af-mfj6Nrq4siZLLeaUEc7huGP9kM_8OKDHWWWbr1bcAgA&oe=6A2751F5'
        ],
        googleMapsUrl: 'https://maps.google.com/?q=Board+Bazar+Gazipur',
      },
    ],
    landData: [
      {
        id: 'land-1',
        name: 'নিলেরপাড়ায় চমৎকার প্লট, গাজীপুর',
        location: '৩০ নং ওয়ার্ড, নিলেরপাড়া, গাজীপুর',
        price: 'সেরা মূল্যের জন্য যোগাযোগ করুন',
        size: '২৩ কাঠা',
        facing: 'দক্ষিণ',
        status: 'রেজিস্ট্রির জন্য প্রস্তুত',
        features: ['সীমানা প্রাচীর', 'বিদ্যুৎ সংযোগ', 'প্রশস্ত রাস্তা', '২টি বেডরুম এবং একটি বারান্দাসহ বাড়ি', 'সংযুক্ত বাথরুম'],
        imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/014/445/766/small/land-plot-for-building-house-aerial-view-land-field-with-pins-pin-location-for-housing-subdivision-residential-development-owned-sale-rent-buy-or-investment-home-or-house-expand-the-city-suburb-free-photo.JPG',
        googleMapsUrl: 'https://maps.google.com/?q=Rajendrapur+Gazipur',
      },
      {
        id: 'land-2',
        name: 'ফাউকালে চমৎকার প্লট, গাজীপুর',
        location: '২৪ নং ওয়ার্ড, ফাউকাল, গাজীপুর',
        price: 'সেরা মূল্যের জন্য যোগাযোগ করুন',
        size: '৬ কাঠা',
        facing: 'পূর্ব',
        status: 'রেজিস্ট্রির জন্য প্রস্তুত',
        features: ['সীমানা প্রাচীর', 'প্রশস্ত রাস্তা'],
        imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/014/445/766/small/land-plot-for-building-house-aerial-view-land-field-with-pins-pin-location-for-housing-subdivision-residential-development-owned-sale-rent-buy-or-investment-home-or-house-expand-the-city-suburb-free-photo.JPG',
        googleMapsUrl: 'https://maps.google.com/?q=Bhawal+National+Park+Gazipur',
      },
      {
        id: 'land-3',
        name: 'ভানুয়ায় চমৎকার প্লট, গাজীপুর',
        location: 'ভানুয়া, গাজীপুর',
        price: 'মূল্যের জন্য যোগাযোগ করুন',
        size: '৬ কাঠা',
        facing: 'দক্ষিণ',
        status: 'রেজিস্ট্রির জন্য প্রস্তুত',
        features: ['৩০ ফুট প্রশস্ত রাস্তা', 'সীমানা প্রাচীর'],
        imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/014/445/766/small/land-plot-for-building-house-aerial-view-land-field-with-pins-pin-location-for-housing-subdivision-residential-development-owned-sale-rent-buy-or-investment-home-or-house-expand-the-city-suburb-free-photo.JPG',
        googleMapsUrl: 'https://maps.google.com/?q=Rajendrapur+Gazipur',
      },
      {
        id: 'land-4',
        name: 'নিলেরপাড়ায় কৃষি জমি, গাজীপুর',
        location: '৩০ নং ওয়ার্ড, নিলেরপাড়া, গাজীপুর',
        price: 'সেরা মূল্যের জন্য যোগাযোগ করুন',
        size: '২৪ কাঠা',
        facing: 'দক্ষিণ',
        status: 'রেজিস্ট্রির জন্য প্রস্তুত',
        features: ['কৃষি জমি', 'বিশেষভাবে ধান চাষের জন্য উপযোগী', 'সেচ ব্যবস্থা', 'বিদ্যুৎ সংযোগ', 'প্রশস্ত রাস্তা'],
        imageUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1200',
        googleMapsUrl: 'https://maps.google.com/?q=Rajendrapur+Gazipur',
      },
    ],
    beds: 'বেডরুম',
    baths: 'বাথরুম',
    size: 'আয়তন',
    viewDetails: 'বিস্তারিত দেখুন',
    location: 'অবস্থান',
    statusReady: 'প্রস্তুত',
    statusSoon: 'দ্রুত হস্তান্তর',
    
    // Contact
    contactBadge: 'যোগাযোগ করুন',
    contactTitle: 'আসুন আলোচনা করি',
    contactTitleSpan: 'আপনার নতুন ঘর নিয়ে।',
    contactDescription: 'আমাদের অফিস ঘুরে দেখুন অথবা কল করুন। গাজীপুরে আপনার স্বপ্নের ফ্ল্যাট খুঁজে পেতে আমরা প্রস্তুত।',
    visitOffice: 'অফিসে আসুন',
    officeAddressFull: 'এফ-২১৪, ও.কে টাওয়ার নিচ তলা (গাজীপুর সরকারি মহিলা কলেজের উত্তর পাশে), গাজীপুর, বাংলাদেশ।',
    callAnywhere: 'যেকোনো জায়গা থেকে কল করুন',
    salesLabel: 'সেলস',
    officeLabel: 'অফিস',
    emailLabel: 'ইমেইল',
    emailValue: 'ahmadulkabir70@gmail.com',
    phoneNumber: '01711262623',
    phoneNumberFormatted: '০১৭১১-২৬২৬২৩',
    officePhoneNumber: '০১৭১৫৮৮০০৫৫',
    businessHours: 'অফিস সময়',
    hoursDays: 'শনি - শুক্র: সকাল ৯:০০ - রাত ১০:০০',
    sendMessage: 'বার্তা পাঠান',
    fullName: 'পুরো নাম',
    phoneNum: 'ফোন নম্বর',
    interest: 'আগ্রহ',
    interestOption1: 'প্রস্তুত ফ্ল্যাট (৩ বেড)',
    interestOption2: 'প্রস্তুত ফ্ল্যাট (২ বেড)',
    interestOption3: 'বাণিজ্যিক স্পেস',
    interestOption4: 'সাধারণ জিজ্ঞাসা',
    messagePlaceholder: 'আপনার প্রয়োজনীয়তা সম্পর্কে জানান...',
    sendRequest: 'অনুরোধ পাঠান',
    
    // Footer
    footerDescription: 'জয়দেবপুর ও গাজীপুর এলাকায় উচ্চমানের প্রস্তুত ফ্ল্যাট এবং বাণিজ্যিক স্পেসের বিশ্বস্ত সহযোগী।',
    quickLinks: 'প্রয়োজনীয় লিংক',
    homeLink: 'নীড় পাতা',
    propertiesLink: 'ফ্ল্যাটসমূহ',
    aboutLink: 'আমাদের সম্পর্কে',
    contactLink: 'যোগাযোগ',
    popularAreas: 'জনপ্রিয় এলাকা',
    flatsIn: 'ফ্ল্যাটের অবস্থান',
    connectWithUs: 'আমাদের সাথে যুক্ত থাকুন',
    office: 'অফিস',
    officeText: 'এফ-২১৪, ও.কে টাওয়ার নিচ তলা (গাজীপুর সরকারি মহিলা কলেজের উত্তর পাশে), গাজীপুর, বাংলাদেশ।',
    allRightsReserved: 'সর্বস্বত্ব সংরক্ষিত।',
    createdBy: 'এই ওয়েবসাইটটি তৈরি করেছে',
    privacyPolicy: 'গোপনীয়তা নীতি',
    termsOfService: 'শর্তাবলী',
    contactWhatsApp: 'হোয়াটসঅ্যাপে যোগাযোগ',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('bn');

  const t = (key: string): any => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}
