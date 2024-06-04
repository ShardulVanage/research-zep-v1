import React from 'react'
import { Fragment, useState } from 'react'

import { StarIcon } from '@heroicons/react/20/solid'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import chat from '../../images/Icons/chat.png'
import certificater from '../../images/Icons/certificate.png'
import guide from '../../images/Icons/information.png'
import materials from '../../images/Icons/folder.png'

function TwitterIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40" {...props}>
      <path d="M13.817 33.753c12.579 0 19.459-10.422 19.459-19.458 0-.297 0-.592-.02-.884a13.913 13.913 0 0 0 3.411-3.543 13.65 13.65 0 0 1-3.928 1.077 6.864 6.864 0 0 0 3.007-3.784 13.707 13.707 0 0 1-4.342 1.66 6.845 6.845 0 0 0-11.655 6.239A19.417 19.417 0 0 1 5.654 7.915a6.843 6.843 0 0 0 2.117 9.128 6.786 6.786 0 0 1-3.104-.853v.086a6.842 6.842 0 0 0 5.487 6.704 6.825 6.825 0 0 1-3.088.116 6.847 6.847 0 0 0 6.39 4.75A13.721 13.721 0 0 1 3.334 30.68a19.36 19.36 0 0 0 10.483 3.066" />
    </svg>
  )
}
function LinkdinIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40" {...props}>
<path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
</svg>
  )
}
function YoutubeIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40" {...props}>
<linearGradient id="PgB_UHa29h0TpFV_moJI9a_9a46bTk3awwI_gr1" x1="9.816" x2="41.246" y1="9.871" y2="41.301" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f44f5a"></stop><stop offset=".443" stop-color="#ee3d4a"></stop><stop offset="1" stop-color="#e52030"></stop></linearGradient><path fill="url(#PgB_UHa29h0TpFV_moJI9a_9a46bTk3awwI_gr1)" d="M45.012,34.56c-0.439,2.24-2.304,3.947-4.608,4.267C36.783,39.36,30.748,40,23.945,40	c-6.693,0-12.728-0.64-16.459-1.173c-2.304-0.32-4.17-2.027-4.608-4.267C2.439,32.107,2,28.48,2,24s0.439-8.107,0.878-10.56	c0.439-2.24,2.304-3.947,4.608-4.267C11.107,8.64,17.142,8,23.945,8s12.728,0.64,16.459,1.173c2.304,0.32,4.17,2.027,4.608,4.267	C45.451,15.893,46,19.52,46,24C45.89,28.48,45.451,32.107,45.012,34.56z"></path><path d="M32.352,22.44l-11.436-7.624c-0.577-0.385-1.314-0.421-1.925-0.093C18.38,15.05,18,15.683,18,16.376	v15.248c0,0.693,0.38,1.327,0.991,1.654c0.278,0.149,0.581,0.222,0.884,0.222c0.364,0,0.726-0.106,1.04-0.315l11.436-7.624	c0.523-0.349,0.835-0.932,0.835-1.56C33.187,23.372,32.874,22.789,32.352,22.44z" opacity=".05"></path><path d="M20.681,15.237l10.79,7.194c0.689,0.495,1.153,0.938,1.153,1.513c0,0.575-0.224,0.976-0.715,1.334	c-0.371,0.27-11.045,7.364-11.045,7.364c-0.901,0.604-2.364,0.476-2.364-1.499V16.744C18.5,14.739,20.084,14.839,20.681,15.237z" opacity=".07"></path><path fill="#fff" d="M19,31.568V16.433c0-0.743,0.828-1.187,1.447-0.774l11.352,7.568c0.553,0.368,0.553,1.18,0,1.549	l-11.352,7.568C19.828,32.755,19,32.312,19,31.568z"></path>
</svg>
  )
}

const faqs = [
  {
      question: "Introduction to Data Analytics",
      answer: [

          <a className=' font-light underline ' href='https://zep.thinkific.com/enroll/2355150?et=free_trial'>What is Data Analytics <span className='bg-black text-white py-1 px-2 rounded-lg text-xs ml-2'>Free Preview  </span></a>,

          "Importance of Data Analytics",
          <a className=' font-light underline ' href='https://zep.thinkific.com/enroll/2355150?et=free_trial'>Types of Data <span className='bg-black text-white py-1 px-2 rounded-lg text-xs ml-2'>Free Preview  </span></a>,


          "Types of Statistical Analysis",
          "Steps to obtain a Data Analytics solution",
          " Business Understanding",
          " Data Understanding",
          " Data Collection",
          " Data Preparation",
          " Data Modelling",
          " Deployment",
          "Use Case",
      ],
  },


  {
      question: "Python for Data Analytics",
      answer: [
          "Course Contents",
          <a className=' font-light underline ' href='https://zep.thinkific.com/enroll/2355150?et=free_trial'>Python Introduction <span className='bg-black text-white py-1 px-2 rounded-lg text-xs ml-2'>Free Preview  </span></a>,


          "Variables & Keywords",
          "Datatypes & Operators",
          "Data Structures - Lists",
          "Data Structures - Tuples",
          "Data Structures - Sets",
          "Data Structures - Dictionary",
          "Loops & Iteration",
          "Functions in Python",
          'File Handling',
          "Map Reduce Filter",
          " OOPS Concepts",
          "Control Structures in Python",

          "NumPy",
          "Pandas",
          "Data Visualization",
          "Matplotlib",
          "Seaborn",
          <b>Python Quiz </b>,
      ],
  },
  {
      question: "Exploratory Data Analysis",
      answer: [
          "Course Contents",
          "  Agenda",
          <a className=' font-light underline ' href='https://zep.thinkific.com/enroll/2355150?et=free_trial'>Data Analytics/Science Process <span className='bg-black text-white py-1 px-2 rounded-lg text-xs ml-2'>Free Preview  </span></a>,


          "  What is EDA",
          " Visualization",
          "Steps involved in EDA (Data Sourcing)",
          " Steps involved in EDA (Data Cleaning)",
          "Handle Missing Values (Theory)",
          "   Handle Missing Values (Code)",
          " Feature Scaling",
          "Feature Scaling (Standardization)",
          "Feature Scaling (Normalization)",
          "Feature Scaling (Code)",
          "Outlier Treatment (Theory)",
          " Outlier Treatment (Code)",
          "Invalid Data",
          "  Types of Data",
          "Types of Analysis",
          "Univariate Analysis",
          "Bivariate Analysis",
          "Multivariate Analysis",
          " Numerical Analysis",
          "Analysis (Code)",
          " Derived Metrics",
          "Feature Binning (Theory)",
          "Feature Binning (Theory)",
          " Feature Binning (Code)",
          "Feature Encoding",
          "Feature Encoding Detailed",
          "Feature Encoding (Code)",
          "Case Study",
          "Data Exploration (Case Study)",
          "Data Cleaning (Case Study)",
          "  Univariate Analysis (Case Study)",
          " Bivariate Analysis (Case Study)",
          "Bivariate Analysis (Case Study)",
          "EDA Report (Case Study)",
          <b>EDA Quiz</b>,
      ],
  },
  {
      question: "Business Statistics",
      answer: [
          " Course Contents",

          "Intro to Stats",

          "Chapter 1 - Agenda",

          "Descriptive Stats",

          "Inferential Stats",

          " Qualitative Data",

          "Quantitative Data",

          "Chapter 2 - Agenda",

          " Population vs Sample",

          "Why sampling is important?",

          "Types of sampling"
          ,
          "Probability Sampling"
          ,
          "Cluster Random Sampling",

          " Non probability sampling"
          ,
          "Chapter 3 - Agenda"
          ,
          "Measures of Central Tendency"
          ,
          " Mean"
          ,
          " Median"
          ,
          "Mode",

          "Measures of Dispersion",

          "   Range",

          "   IQR"
          ,
          "Mean Deviation"
          ,
          " Variance & Standard Deviation",

          " Why n-1 and not n",

          "Chapter 4 - Agenda",

          "Probability",

          "Addition Rule",

          "Independent Events",

          "Cumulative Probability"
          ,
          "Conditional Probability",

          " Bayes Theorem Part 1",

          "Bayes Theorem Part 2",

          "Chapter 5 - Agenda",

          " Uniform Distribution",

          "                Binomial Distribution",
          "    Poisson Distribution",

          "Normal Distribution Part 1",

          "      Normal Distribution Part 2",

          "Skewness",

          "Kurtosis",
          "Calculating Probability with Z-Score",

          "Z-Score Calculation Table",

          'Example',

          "Chapter 6 Agenda",

          "Correlation vs Covariance",

          " Covariance",

          "Correlation",

          "Chapter 7 - Agenda"
          ,
          " Hypothesis Testing",

          "Tailed Tests",

          " What is p-value?"
          ,
          "Types of Tests"
          ,
          "   T Test"
          ,
          "  Z Test",

          " ANOVA",

          "Chi Square",

          " Correlation",

          <b>Statistcs Quiz</b>,
      ],
  },
  {
      question: "SQL for Data Analysis",
      answer: [
          "Course Contents",
          "Data Architecture - File server vs Client server",
          "Installation of MySQL Workbench",
          "Introduction to SQL",
          "Constraints in SQL",
          "Table Basics - DDLs",
          "Table Basics - DQLs",
          "Table Basics - DMLs",
          "Joins in SQL",
          "Data Import & Export",
          "Aggregation Functions",
          "String Functions",
          "Date Time Functions",
          "Regular Expressions",
          "Nested Queries",
          "Views",
          "Stored Procedures",
          "Windows Function",
          "SQL-Python connectivity",
          <b>SQL Quiz</b>,
      ],
  },
  {
      question: "Microsoft Excel",
      answer: [
          "Course Contents",
          "Pre-defined Functions",
          "Datetime Functions",
          "String Functions",
          "Mathematical Functions",
          "Lookup (Hlookup,Vlookup)",
          "Logical & Error Functions",
          "Statistical Functions",
          "Images in Excel",
          "Excel Formatting",
          "Custom Formatting",
          "Conditional Formatting",
          "Charts in Excel",
          "Data Analysis using Excel",
          "Pivot Tables",
          "Dashboarding in Excel",
          "Others",
          <b>Excel Quiz</b>,
      ],
  },

  {
      question: "Power BI",
      answer: [
          "Course Contents",
          "Introduction",
          "Introduction to Power BI",
          "Life Hack to get Power BI Pro [2022]",
          "Power BI Desktop",
          "Power BI Services",
          "Power Query Editor",
          "Data Profiling",
          "PBI Group by",
          "PBI Applied Steps",
          "Append vs Merge",
          "PBI Visuals",
          "Power BI Charts",
          "Introduction to DAX",
          "Implicit Measures",
          "DAX Formula",
          "Basic DAX Functions",
          "Date Functions",
          "CALENDAR Functions",
          "Contexts Row vs Filter",
          "CALCULATE & FILTER Functions",
          "IF ELSE Conditions",
          "Time Intelligence Functions",
          "X vs Non X Functions",
          "Tool tips , Drill Throughs",
          "Relationships",
          "KPIs",
          "Administration in Power BI",
          "Security in Power BI",
          "PBI Best Practices",
          "Formatting",
          "EDA",
          <b>Power BI Quiz</b>,
      ],
  },
  {
      question: "Tableau",
      answer: [
          "Course Contents",
          "What is Data Visualization",
          "BI Process",
          "About Tableau - What is Tableau?",
          "About Tableau - how to use Tableau?",
          "About Tableau - Features of Tableau",
          "Tableau Architecture",
          "Tableau vs Power BI",
          "Tableau Desktop",
          "Relationships, Joins & Unions",
          "Sets in Tableau",
          "Groups in Tableau",
          "Hierarchies in Tableau",
          "Filters in Tableau",
          "Highlighting",
          "Device Deisgner",
          "Parameters",
          "Data Blending & Mark Size",
          "Transparency",
          "Date Aggregation",
          "Generated Fields",
          "Discrete vs Continuous",
          "Charts in Tableau",
          "Pivot Tables in Tableau",
          "LOD Expressions",
          "Calculated Fields",
          "Formatting",
          "Forecasting in Tableau",
          "Analytics in Tableau",
          "Dashboarding",
          <b>Tableau Quiz</b>,
      ],
  },
  {
      question: "Predictive Analytics",
      answer: [
          "Course Contents",
          "Introduction to PA",
          "Predictive Analytics Process",
          "How does the Model Work?",
          "Why Predictive Modelling?",
          "Applications of Predictive Modelling",
          "What is Machine Learning",
          "Types of Machine Learning",
          "Classification",
          "k-nearest neighbors (Theory)",
          "k-NN Example (Excel)",
          "Classification Practicals Part 1",
          <a className=' font-light underline ' href='https://zep.thinkific.com/enroll/2355150?et=free_trial'>k-nearest neighbors (Code) <span className='bg-black text-white py-1 px-2 rounded-lg text-xs ml-2'>Free Preview  </span></a>,



          "Decision Trees (Theory)",
          "Decision Tree (Code)",
          "Random Forests",
          "Random Forests (Code)",
          "Boosting Algorithms",
          "Boosting (Code)",
          "Regression (Theory)",
          "Regression(Code)",
          "Clustering (Theory)",
          "Clustering (Code)",
          "Time Series Forecasting (Theory)",
          "Time Series Forecasting (Code)",
          <b>Predictive Analytics Quiz</b>,
      ],
  },
  {
      question: "ETL & Data Warehousing",
      answer: [
          "Course Contents",
          "Introduction to ETL & Data Warehouse",
          "What is ETL?",
          <a className=' font-light underline ' href='https://zep.thinkific.com/enroll/2355150?et=free_trial'>ETL Tools & Azure Data Factory Architecture<span className='bg-black text-white py-1 px-2 rounded-lg text-xs ml-2'>Free Preview  </span></a>,

          "What is Data Warehouse?",
          "Benefits of Data Warehousing",
          "Data Warehouse Structure",
          "Why do we need Staging environment?",
          "What are Data Marts?",
          "Data Lakes",
          "Data Lake vs Data Warehouse",
          "Elements of Data Lake",
          <b>ETL & Data Warehousing Quiz</b>,
      ],
  },
  {
      question: "Interview  Guides",
      answer: [
          "Python", "Statistics", "Power BI", "Tableau", "SQL"
      ],
  },
  {
      question: "Capstone Project",
      answer: [
          "Power BI - Live Project",
          "Tableau - Live Project",
          "Financial Dashboard",
" ⁠Sales Analytics",
"⁠Cyber Security Breaches",
" ⁠Telecom Analytics",
" ⁠HR Analytics",
      ],
  },
  {
      question: "Final Assignment",
      answer: [
          "This is a graded assignment, a score of 70% and above guarantees you a course completion certificate, and a score of   80% and above guarantees an internship opportunity from Zep or their partner companies"

      ],
  },
  // Add more FAQs here...
];


const product = {
  name: 'Mastering Data Analytics: From Insights to Action',
  href: '#',
  price: '₹9,999',
  description:
    "The surge of data is revolutionizing businesses, with companies of all sizes increasingly relying on data-driven insights for decision-making. Data specialists play a crucial role in shaping business strategies and marketing tactics, making their expertise highly sought after. ",
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-featured-product-shot.jpg',
  imageAlt: 'Light green canvas bag with black straps, handle, front zipper pouch, and drawstring top.',
  breadcrumbs: [
    { id: 1, name: 'Travel', href: '#' },
    { id: 2, name: 'Bags', href: '#' },
  ],
  sizes: [
    { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
    { name: '20L', description: 'Enough room for a serious amount of snacks.' },
  ],
}
const policies = [
  {
    name: '24/7 Chat Support',
    description:
      ' Access round-the-clock assistance from our dedicated support team to help you with any course-related queries.',
    imageSrc: chat,
  },
  {
    name: ' Resume Preparation Guidance',
    description:
      'Receive expert advice on crafting a standout resume that highlights your newly acquired data science skills.',
    imageSrc: guide,
  },
  {
    name: 'Interview Prep Materials',
    description:
      "Benefit from comprehensive materials designed to help you ace data science job interviews with confidence.",
    imageSrc: materials,
  },
  {
    name: 'Certificate of Completion',
    description:
      " Earn a verified certificate upon successfully finishing the course, showcasing your expertise to potential employers.",
    imageSrc: certificater,
  },
]
const reviews = {
  average: 4,
  totalCount: 1624,
  counts: [
    { rating: 5, count: 1019 },
    { rating: 4, count: 162 },
    { rating: 3, count: 97 },
    { rating: 2, count: 199 },
    { rating: 1, count: 147 },
  ],
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
      `,
      author: 'Emily Selman',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    {
      id: 1,
      rating: 5,
      content: `
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
      `,
      author: 'Emily Selman',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    }, {
      id: 1,
      rating: 5,
      content: `
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
      `,
      author: 'Emily Selman',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },  
    // More reviews...
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function CourseDetail() {
  const [open, setOpen] = useState(false)
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  return (
   <section className='bg-white'>
    <div className="bg-white">
      <div aria-hidden="true" className="relative">
        <img
          src="https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="h-96 w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white" />
      </div>

      <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-2 sm:px-6 sm:pb-4 lg:px-8 ">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          {/* <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Mastering Data Analytics: From Insights to Action</h2>
          <p className="mt-4 text-gray-500">
            Organize is a system to keep your desk tidy and photo-worthy all day long. Procrastinate your work while you
            meticulously arrange items into dedicated trays.
          </p> */}
        </div>

     
      </div>
    </div>

    {/* section part 2 */}


    <div className="bg-gray-50">
      <main>
        {/* Product */}
        <div className="bg-white pt-12">
          <div className="mx-auto max-w-2xl px-4 pb-24  sm:px-6 sm:pb-32  lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            {/* Product details */}
            <div className="lg:max-w-lg lg:self-end">
            
              <div className="mt-4">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{product.name}</h1>
              </div>

              <section aria-labelledby="information-heading" className="mt-4">
                
                <div className="flex items-center">
                  <p className="text-lg text-gray-900 sm:text-4xl">{product.price}</p>
                  <div className="ml-4 border-l border-gray-300 pl-4">
                    <h2 className="sr-only">Reviews</h2>
                    <div className="flex items-center">
                      <div>
                        <div className="flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              className={classNames(
                                reviews.average > rating ? 'text-yellow-400' : 'text-gray-300',
                                'h-5 w-5 flex-shrink-0'
                              )}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <p className="sr-only">{reviews.average} out of 5 stars</p>
                      </div>
                      <p className="ml-2 text-sm text-gray-500">{reviews.totalCount} reviews</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-6">
                  <p className="text-base text-gray-500">{product.description}</p>
                </div>

              
              </section>
            </div>

            {/* Course Content */}
            <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
              <div className="bg-slate-200 overflow-scroll">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8 ">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Course Content</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10 ">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6 ">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
              </div>
            </div>

            {/* Product form */}
            <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
              <section aria-labelledby="options-heading">

                  <button className=' px-7 mx-2  py-1 text-white rounded-md bg-gradient-to-tl from-cyan-400 via-blue-500 to-blue-600 drop-shadow-lg   '>
                    buy Now
                  </button>

               <h1 className=' py-4 text-2xl font-medium'>
               Job Roles after the course
               </h1>
               <ul className='list-disc pl-8 '>

                <li>Data Analyst</li>
                <li>Business Analyst</li>
                <li>BI Analyst</li>
                <li>BI Developer</li>
                <li>Power BI Developer</li>
                <li>Tableau Developer</li>
                <li>and many more....</li>

               </ul>

              </section>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-2xl px-4  sm:px-6 lg:max-w-7xl lg:px-8 bg-white">
          {/* Details section */}
      

          {/* Policies section */}
          <section aria-labelledby="policy-heading" className="mt-16 lg:mt-0 ">
            <h2 id="policy-heading" className="sr-only">
              Our policies
            </h2>
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 ">
              {policies.map((policy) => (
                <div key={policy.name}>
                  <img src={policy.imageSrc} alt="" className="h-12 w-auto" />
                  <h3 className="mt-6 text-base font-medium text-gray-900">{policy.name}</h3>
                  <p className="mt-3 text-base text-gray-500">{policy.description}</p>
                </div>
              ))}
            </div>
          </section>
              <div className='flex flex-col justify-center items-center w-full py-4'>
              <a href='https://drive.google.com/file/d/1FnGXP1Wc70A-lxPihE2tJakuWzd0tlcI/view' className='  px-7   py-3 text-white rounded-md bg-gradient-to-tl from-cyan-400 via-blue-500 to-blue-600 drop-shadow-lg '>Download syllabus</a>
              </div>
        </div>



        <section
      id="author"
      aria-labelledby="author-title"
      className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16  bg-[#ffffff] w-screen"
    >
      
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="bg-white/10 sm:bg-white drop-shadow-md pt-px sm:rounded-6xl rounded-3xl">
          <div className=" drop-shadow-md relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-blue-500 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
            <img
              className="absolute inset-0 h-full w-full object-cover "
              src='https://res.cloudinary.com/dtsuvx8dz/image/upload/v1707977098/ctohbqrxrmwziauyw1iz.jpg'
              alt=""
              sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem "
            />
          </div>
          <div className=" px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32 text-left">
            <h1 className='text-black bg-blue-100   border-double border-4 border-black w-24 text-center rounded-md' number="5" id="author-title">
              Instructor
            </h1>
            <p className="mt-8 text-left font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-6xl ">
              <span className="block bg-clip-text text-transparent  bg-gradient-to-r from-blue-400/70 via-blue-500/70 to-blue-200 drop-shadow-md">Satyajit Pattnaik –</span> Hey
              there, Im the Creator behind Microsoft Power BI Masters - 2024 Edition.
            </p>
            <p className="mt-4 text-lg text-left tracking-tight text-slate-700 [&>span]:font-medium">
              Certified Data Scientist & Tensorflow Certified Developer <br />
                  Number of students trained so far: <span>10000+</span> <br />
                                Average Trainer Score: <span>9+</span> <br />
                          
              <span>13+ years experience working in Data Analytics
                 and Data Sciences </span>across different industry verticals including telecom, cyber security, insurance, e-commerce etc.
                <span> Owner of more than 20+ data communities over the globe, and runs a small YouTube channel on my name having 65,000+ subscribers</span>
            </p>
            <div className="mt-8 flex  justify-evenly  items-center flex-row ">
            
               <a
                href="https://www.linkedin.com/in/satyajitpattnaik/"
                className=" sm:ml-16 inline-flex items-center text-base font-medium tracking-tight text-blue-400"
              >
                <LinkdinIcon className="h-10 w-14 fill-current " />
                <span className="sm:ml-4 pt-1 font-bold"> Linkedin</span>
             
              </a>
              <a
                href="https://www.youtube.com/c/SatyajitPattnaik"
                className=" sm:ml-16 inline-flex items-center text-base font-medium tracking-tight text-red-500"
              >
              <YoutubeIcon className="h-10 w-14 fill-current " />
                <span className="ml-1 sm:ml-4 pt-1 font-bold"> Youtube</span>
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>


        <section aria-labelledby="reviews-heading" className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-32">
            <div className="lg:col-span-4">
              <h2 id="reviews-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                Customer Reviews
              </h2>

              <div className="mt-3 flex items-center">
                <div>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating ? 'text-yellow-400' : 'text-gray-300',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                </div>
                <p className="ml-2 text-sm text-gray-900">Based on {reviews.totalCount} reviews</p>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Review data</h3>

                <dl className="space-y-3">
                  {reviews.counts.map((count) => (
                    <div key={count.rating} className="flex items-center text-sm">
                      <dt className="flex flex-1 items-center">
                        <p className="w-3 font-medium text-gray-900">
                          {count.rating}
                          <span className="sr-only"> star reviews</span>
                        </p>
                        <div aria-hidden="true" className="ml-1 flex flex-1 items-center">
                          <StarIcon
                            className={classNames(
                              count.count > 0 ? 'text-yellow-400' : 'text-gray-300',
                              'h-5 w-5 flex-shrink-0'
                            )}
                            aria-hidden="true"
                          />

                          <div className="relative ml-3 flex-1">
                            <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
                            {count.count > 0 ? (
                              <div
                                className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
                                style={{ width: `calc(${count.count} / ${reviews.totalCount} * 100%)` }}
                              />
                            ) : null}
                          </div>
                        </div>
                      </dt>
                      <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                        {Math.round((count.count / reviews.totalCount) * 100)}%
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-medium text-gray-900">Share your thoughts</h3>
                <p className="mt-1 text-sm text-gray-600">
                  If you’ve used this product, share your thoughts with other customers
                </p>

                <a
                  href="#"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
                >
                  Write a review
                </a>
              </div>
            </div>

            <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
              <h3 className="sr-only">Recent reviews</h3>

              <div className="flow-root">
                <div className="-my-12 divide-y divide-gray-200">
                  {reviews.featured.map((review) => (
                    <div key={review.id} className="py-12">
                      <div className="flex items-center">
                        <img src={review.avatarSrc} alt={`${review.author}.`} className="h-12 w-12 rounded-full" />
                        <div className="ml-4">
                          <h4 className="text-sm font-bold text-gray-900">{review.author}</h4>
                          <div className="mt-1 flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                              <StarIcon
                                key={rating}
                                className={classNames(
                                  review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                                  'h-5 w-5 flex-shrink-0'
                                )}
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                          <p className="sr-only">{review.rating} out of 5 stars</p>
                        </div>
                      </div>

                      <div
                        className="mt-4 space-y-6 text-base italic text-gray-600"
                        dangerouslySetInnerHTML={{ __html: review.content }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

     
    </div>
   </section>
  )
}

export default CourseDetail