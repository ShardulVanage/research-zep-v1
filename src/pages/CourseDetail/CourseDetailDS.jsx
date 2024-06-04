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
      question: "Introduction ",
      answer: [
        "Welcome to the course!!",
        "Course Resources",
        "Join our Community",
        
      ],
  },


  {
      question: "Python Programming",
      answer: [
       
        "Introduction to Python",
        "Variables Keywords",
        "Datatypes Operators",
        "Lists",
        "Tuples",
        "Dictionary",
        "Sets",
        "Loops Iteration",
        "Functions",
        "File Handling",
        "Control Structures",
        "OOPs",
        "NumPy",
        "Pandas",
        "Data Visualization",
        "Matplotlib",
        "Seaborn",

      ],
  },
  {
      question: "Statistics for Data Science",
      answer: [
         
        "Intro to Stats",
        "Agenda",
        "Descriptive Statistics",
        "Inferential Statistics",
        "Qualitative Data",
        "Quantitative",
        "Agenda",
        "Pop vs Sample",
        "Why Sampling is Important",
        "Types of Sampling",
        "Cluster Random Sampling",
        "Probability Sampling",
        "Non Probability Sampling",
        "Population Sampling",
        "Why n1 and not n",
        "Agenda NEW",
        "Agenda",
        "Measures of Central Tendency",
        "Mean",
        "Median",
        "Mode",
        "Measures of Dispersion",
        "Range",
        "IQR",
        "Variance and Standard Deviation",
        "Mean Deviation",
        "Agenda",
        "Probability",
        "Addition Rule",
        "Independent Events",
        "Cumulative Probability",
        "Conditional Probability",
        "Bayes Theorem 1",
        "Bayes Theorem 2",
        "Agenda NEW",
        "Agenda",
        "Uniform Distribution",
        "Binomial Distribution",
        "Poisson Distribution",
        "Normal Distribution 1",
        "Normal Distribution 2",
        "Skewness",
        "Kurtosis",
        "Calculating Probability with Z Score [part 1]",
        "Calculating Probability with Z Score [part 2]",
        "Calculating Probability with Z Score [part 3]",
        "Agenda",
        "Covariance",
        "Correlation",
        "Correlation vs Covariance",
        "Correlation",
        "p value",
        "T Test",
        "Tailed Tests",
        "Types of Test",
        "Z Test",
        "Chi Square",
        "ANOVA",
      ],
  },
  {
      question: "SQL",
      answer: [
        "Installation",
        "File Server vs Client Server",
        "Introduction to SQL",
        "Constraints in SQL",
        "Table Basic DDLs",
        "Table Basics - DQLs",
        "Table Basics - DMLs",
        "Joins",
        "Data Import Export",
        "Aggregation",
        "String Functions",
        "Date Time Functions",
        "Regular Expressions",
        "Nested Queries",
        "Views",
        "Stored Procedures",
        "Windows Function",
        "SQL Python Connectivity",

      ],
  },
  {
      question: "Machine Learning",
      answer: [
        "INTRO - Agenda",
        "INTRO - Introduction",
        "INTRO - Types of ML",
        "INTRO - Use Cases Part 1",
        "INTRO - Use Cases Part 2",
        "PRE REQUISITE - Features",
        "PRE REQUISITE - Train-Test-Split",
        "PRE REQUISITE - Feature Scaling",
        "PRE REQUISITE - Standardization",
        "PRE REQUISITE - Normalization",
        "PRE REQUISITE - Feature Encoding",
        "PRE REQUISITE - Feature Encoding Practicals",
        "REGRESSION - Regression",
        "REGRESSION - Regression Metrics (PRACTICALS)",
        "REGRESSION - SLR",
        "REGRESSION - MLR",
        "REGRESSION LR Codes",
        "REGRESSION - MLR Example",
        "REGRESSION - Polynomial Regression",
        "REGRESSION - Polynomial Regression Practicals",
        "REGRESSION - Bias Variance Tradeoff",
        "REGRESSION - Ridge Regression",
        "REGRESSION - Lasso Regression",
        "REGRESSION - Ridge and Lasso Regression Practicals",
        "CLASSIFICATION - Classification",
        "CLASSIFICATION - Types Of Classification",
        "CLASSIFICATION - Log Loss",
        "CLASSIFICATION - Confusion Matrix",
        "CLASSIFICATION - AOC RUC",
        "CLASSIFICATION - Classification Report",
        "CLASSIFICATION - KNN",
        "CLASSIFICATION - KNN Excel Example",
        "CLASSIFICATION - Classification Practicals Part 1",
        "CLASSIFICATION - KNN Code",
        "CLASSIFICATION - Decision Tree",
        "CLASSIFICATION - DT Example Entropy",
        "CLASSIFICATION - DT Gini Index",
        "CLASSIFICATION - DT Code",
        "CLASSIFICATION - Visualizing DT",
        "CLASSIFICATION - Random Forest",
        "CLASSIFICATION - RF Code",
        "CLASSIFICATION - Naive Bayes",
        "CLASSIFICATION - SVMs Part 1",
        "CLASSIFICATION - SVMs Part 2",
        "CLASSIFICATION - Logistic Regression",
        "CLASSIFICATION - Practicals So Far",
        "CLASSIFICATION - Issues in Classification Part 1",
        "CLASSIFICATION - Issues in Classification Part 2",
        "CLASSIFICATION - Practicals",
        "ENSEMBLE - Ensemble",
        "ENSEMBLE - Bagging",
        "ENSEMBLE - Bagging vs RF",
        "ENSEMBLE - Bagging Practicals",
        "ENSEMBLE - Bagging Reg Practicals",
        "ENSEMBLE - Boosting",
        "ENSEMBLE - Adaboost",
        "ENSEMBLE - Gradient Boosting",
        "ENSEMBLE - CF vs LF",
        "ENSEMBLE - Cross Entropy",
        "ENSEMBLE - XGBoost",
        "ENSEMBLE - Practicals",
        "CLUSTERING - Clustering",
        "CLUSTERING - HC Practicals",
        "CLUSTERING - Hierarchial Clustering",
        "CLUSTERING - K Means Clustering",
        "CLUSTERING - K means Clustering Practicals",
        "CLUSTERING - Mean Shift Theory and Practicals",
        "FEATURE ENGINEERING - Dimensionality Reduction",
        "FEATURE ENGINEERING - RFE SFS",
        "FEATURE ENGINEERING - RFE Practicals",
        "FEATURE ENGINEERING - SFS",
        "FEATURE ENGINEERING - CHI SQUARE TEST",
        "FEATURE ENGINEERING - CHI SQUARE PRACTICALS",
        "FEATURE ENGINEERING - PCA THEORY",
        "FEATURE ENGINEERING - PCA PRACTICALS",
        "FEATURE ENGINEERING - LDA THEORY",
        "FEATURE ENGINEERING - LDA PRACTICALS",
        "FEATURE ENGINEERING - kPCA & QDA",
        "FEATURE ENGINEERING - kPCA & QDA PRACTICALS",
        "HPO - HYPER PARAMETER OPTIMIZATION BASICS",
        "HPO - MANUAL HPO",
        "HPO - GRID VS RANDOM",
        "HPO - MANUAL PRACTICALS",
        "HPO - RSCV PRACTICALS",
        "HPO - GSCV PRACTICALS",
      ],
  },
  {
      question: "Time Series Analysis",
      answer: [
     
        "Introduction to TSA",
        "Time Series vs Regression",
        "Time Series Analysis",
        "Anomaly Detection",
        "Components of Time Series",
        "Decomposition",
        "Decomposition (Implementation)",
        "Additive/Multiplicative Decomposition",
        "Stationarity",
        "Testing TS Stationarity",
        "Transformation",
        "Introduction to Pre-Processing",
        "Handle Missing Value",
        "Handle Missing Value (Code)",
        "Outlier Treatment",
        "Sigma Technique",
        "Feature Scaling",
        "Standardization",
        "Normalization",
        "Feature Scaling (Code)",
        "Feature Encoding",
        "Feature Encoding (Code)",
        "Models - Algorithms",
        "Models - ARIMA [part 1]",
        "Models - ARIMA [part 2]",
        "Models - AR Theory",
        "Models - MA Theory",
        "Models - ACF/PACF",
        "Models - Find PDQ",
        "Models - ARIMA (Code) [part 1]",
        "Models - ARIMA (Code) [part 2]",
        "Models - ARIMA (Final Code)",
        "Models - Decomposition",
        "Models - ACF/PACF",
        "Models - Best Transformation",
        "Models - Grid Search [part 1]",
        "Models - Grid Search [part 2]",
        "Models - Final Model",
        "Models - FBProphet [part 1]",
        "Models - FBProphet [part 2]",
        "Models - FBProphet [part 3]",
        "Models - Multi Variate TS Analysis",
        "Models - FBProphet [Uni/Multi]",
        "Introduction to Metrics",
        "Forecasting Evaluation Metrics",
        "Mean Squared Error",
        "Root Mean Squared Error",
        "Mean Absolute Percentage Error",
        "Project 1 - Energy Forecasting #1",
        "Project 1 - Energy Forecasting #2",
        "Project 1 - Energy Forecasting #3",
        "Project 2 - Stock Market Prediction #1",
        "Project 2 - Stock Market Prediction #2",
        "Project 2 - Stock Market Prediction #3",
        "Project 2 - Demand Forecasting #1",
        "Project 2 - Demand Forecasting #2",
        "Project 2 - Demand Forecasting #3",
        "Project 2 - Demand Forecasting #4",
        "Project 2 - Demand Forecasting #5",
        "Project 2 - Demand Forecasting #6",
      ],
  },

  {
      question: "Deep Learing",
      answer: [
        "Introduction to DL",
        "Understanding Deep Learning",
        "What is a Neuron",
        "Activation Functions",
        "Step Function",
        "Linear Function",
        "Sigmoid Function",
        "TanH Function",
        "ReLU Function",
        "Backpropagation and Forward Pass",
        "Gradient Descent",
        "ANN Intuition",
        "ANN Code",
        "ANN HPO",
        "CNN Steps in CNN",
        "CNN What is CNN",
        "CNN CNN Architecture Explained",
        "CNN Image Augmentation",
        "CNN Batch Size vs Iterations vs Epochs",
        "CNN Code Implementation of CNN",
        "CNN Model Summary & Parameters",
        "CNN Hands on XRAY",
        "RNN Basics",
        "Types of RNN",
        "RNN VG+EG",
        "Before we move on",
        "LSTM",
        "LSTM Code",
        "Pre trained RAW",
        "Pre trained Code",
        "VGG16",
        "MobileNet",
        "Transfer Learning",
        "Final Project + Streamlit",
      ],
  },
  {
      question: "Natural Language Processing ",
      answer: [
        "Intro to NLP - NLP Intro",
        "Intro to NLP - Intro Part 2",
        "Intro to NLP - NLP Key Challenges",
        "Intro to NLP - Linguistics",
        "NLP Basics - Case Folding",
        "NLP Basics - SCR",
        "NLP Basics - Handling Contractions",
        "NLP Basics - Tokenization",
        "NLP Basics - Stop Words Removal",
        "NLP Basics - nGrams",
        "NLP Basics - Vectorization",
        "NLP Basics - Word Embeddings",
        "NLP Basics - BoW",
        "NLP Basics - BoW Practicals",
        "NLP Basics - TFIDF",
        "NLP Basics - TFIDF Practicals",
        "NLP Basics PoS & NER",
        "NLP Basics - NER Practicals",
        "Word Embeddings - Word2Vec Intro",
        "Word Embeddings - Word2Vec Part 2",
        "Word Embeddings - Pretrained Word2Vec",
        "Word Embeddings - Word2Vec INTUITION",
        "Word Embeddings - Word2Vec 50Features",
        "Word Embeddings - Word2Vec CBOW",
        "Word Embeddings - Word2Vec SkipGrams",
        "Word Embeddings - GloVe",
        "Word Embeddings - fastText",
        "Word Embeddings - Cosine Similarity",
        "Neural Networks - LSTM Part 1",
        "Neural Networks - LSTM Part 2 Architecture",
        "Neural Networks - LSTM Part 3 Deep Dive Architecture",
        "Neural Networks - LSTM Part 4 Pointwise Operations",
        "Neural Networks - LSTM Part 5 forgetGate",
        "Neural Networks - LSTM Part 6 inputGate",
        "Neural Networks - LSTM Part 7 outputGate",
        "Neural Networks - LSTM Part 8 Practicals",
        "Neural Networks - LSTM Part 9 Practicals",
        "Neural Networks - LSTM Part 10 Practicals",
        "Neural Networks - GRU Part 1",
        "Neural Networks - GRU Part 2",
        "Neural Networks - GRU Part 3 resetGate",
        "Neural Networks - GRU Part 4 updateGate",
        "Neural Networks - GRU Part 5 Practicals",
        "Neural Networks - Bi Directional RNN",
      ],
  },
  {
      question: "Transformatiom n Gen Ai",
      answer: [
        
        "Transformers",
        "Self Attention",

      ],
  },
  {
      question: "Deployment",
      answer: [
         
        "Deployment",
        "Intro To Flask",
        "Flask Basic App",
        "Model Building Breast Cancer",
        "Flask App Breast Cancer",
        "AWS",
        "AWS Deployment",
       
      ],
  },
  {
      question: "Power Bi",
      answer: [
        "Course Details"

      ],
  },
  {
      question: "Tableau",
      answer: [
        "Course Details"
      ],
  },
  {
      question: "Data Engineering Basics",
      answer: [
       
        "Course Details",
        "Introduction",
        "What is ETL",
        "ETL Tools",
        "What is a Data Warehouse",
        "Table Basics - DDLs",
        "Data Warehouse Structure",
        "Why do we need staging",
        "What are Data Marts",
        "Data Lake",
        "Data Lake vs Data Warehouse",
        "Elements of Datalake",

      ],
  },
  {
    question: "End to End Project",
    answer: [
     
      "House Price Prediction (Advanced)",
      "Appliance Energy Prediction",
      "Australia Weather Prediction",
      "Banking Term Deposit",
      "Big Mart Sales Prediction",
      "Bike Sharing Demand Prediction",
      "Car Price Prediction",
      "Cirrhosis Prediction",
      "Credit Card Default Prediction",
      "GS Rice Files",
      "Heart Failure Prediction",
      "Hospital Mortality",
      "Income Data Classification",
      "Loan Prediction",
      "Migraine Classification",
      "Policy Recommendation Systems",
      "Prediction of Used Car Prices",
      "Real Estate Analysis",
      "Spanish Wine Quality",
      "Stroke Prediction",
      "Supply Chain Management",
      "Water Quality Classification"
      
    ],
},
  // Add more FAQs here...
];





const product = {
  name: 'Data Science Fundamentals: From Zero to Hero',
  href: '#',
  price: '₹9,999',
  description:
    "The outburst of data is transforming businesses. Companies - big or small - are now expecting their business decisions to be based on data-led insight. Data specialists have a tremendous impact on business strategies and marketing tactics.",
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
              <li>Data Scientist</li>
              <li>AI Engineer</li>
              <li>Gen AI Engineer</li>
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