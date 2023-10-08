import React, { useState } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import BoxContainer from "./BoxContainer";
import DatePiker from "./DatePiker";

function InfoSection() {
  const [userDob, setUserDob] = useState("");
  const [userName, setUserName] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showUserDetails, setShowUserDetails] = useState(false);

  const [userAgeInfo, setUserAgeInfo] = useState({
    age: "",
    ageInYears: "",
    ageInMonths: "",
    ageInWeeks: "",
    ageInDays: "",
  });

  const getDate = (text) => {
    setUserDob(text);
  };

  const AgeInYear = (e) => {
    e.preventDefault(); // Prevent form submission

    const birthDate = new Date(userDob);
    const today = new Date();
    const ageInMilliseconds = today - birthDate;

    let years = today.getFullYear() - birthDate.getFullYear();
    const birthMonth = birthDate.getMonth();
    const currentMonth = today.getMonth();
    const birthDay = birthDate.getDate();
    const currentDay = today.getDate();

    let months = currentMonth - birthMonth;

    if (currentDay < birthDay) {
      months -= 1;
      const daysInLastMonth = new Date(
        today.getFullYear(),
        currentMonth,
        0,
      ).getDate();
      const remainingDays = daysInLastMonth - birthDay + currentDay;
      setUserAgeInfo({
        age: `${years} years ${months} months ${remainingDays} days`,
        ageInYears: years,
        ageInMonths: `In ${months} months and ${remainingDays} day`,
        ageInWeeks: Math.floor(ageInMilliseconds / (7 * 24 * 60 * 60 * 1000)),
        ageInDays: Math.floor(ageInMilliseconds / (24 * 60 * 60 * 1000)),
      });
    } else {
      setUserAgeInfo({
        age: `${years} years ${months} months and ${
          currentDay - birthDay
        } days`,
        ageInYears: years,
        ageInMonths: `In ${months} months and ${currentDay - birthDay} day`,
        ageInWeeks: Math.floor(ageInMilliseconds / (7 * 24 * 60 * 60 * 1000)),
        ageInDays: Math.floor(ageInMilliseconds / (24 * 60 * 60 * 1000)),
      });
    }
    setFormSubmitted(true); // Set the form as submitted
    setTimeout(() => {
      setShowUserDetails(true); // Show user details component after a delay
    }, 1000); // 1-second delay
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setShowUserDetails(false);
    setUserDob("");
    setUserName("");
  };
  const getName = (text) => {
    setUserName(text);
  };

  return (
    <section className="mx-auto flex flex-col items-center justify-center gap-8 px-4 pt-5 sm:w-[80%] sm:px-0 md:w-[70%]">
      <h1 className="mb:mt-4 text-center text-2xl font-semibold sm:text-3xl md:mb-10 md:text-5xl">
        Chronological <span className="text-[#FFB777]">Age Calculator</span>
      </h1>

      {formSubmitted && showUserDetails ? (
        <BoxContainer contentClass=" flex flex-col gap-5 ">
          <h1 className="my-5 w-full text-center text-2xl font-semibold capitalize">
            {userName} Your Age Is
          </h1>
          <span className="text-[#FFB777 ] rounded-md border-4 border-[#FFB777]  px-4 py-6 text-center text-4xl font-semibold">
            {" "}
            {userAgeInfo?.age}
          </span>
          <div className="flex items-center justify-around">
            <span className="w-[45%] rounded-md bg-gradient-to-b from-purple-400/60 to-white/60 px-3 py-2 text-center">
              {userAgeInfo?.ageInDays} In Days
            </span>
            <span className="w-[45%] rounded-md bg-gradient-to-b from-purple-400/60 to-white/60 px-3 py-2 text-center">
              {userAgeInfo?.ageInMonths}
            </span>
          </div>
          <button
            className="mx-auto rounded-md bg-gradient-to-b from-orange-700 to-orange-500 px-5 py-2"
            onClick={resetForm}
          >
            Close{" "}
          </button>
        </BoxContainer>
      ) : (
        <>
          <form
            className="w-full space-y-8 sm:w-[90%]  md:w-[80%]"
            onSubmit={AgeInYear}
          >
            <BoxContainer
              contentClass="grid m-5 "
              containerClass="flex flex-col gap-4 w-full py-8"
            >
              <DatePiker
                title="Date Of Birth :"
                placeholder="00/00/0000"
                type="date"
                isCurrent={false}
                updateSharedData={getDate}
              />
              <DatePiker
                title="Current Date :"
                placeholder="00/00/0000"
                type="date"
                isCurrent={true}
              />
              <DatePiker
                title="Enter Name:"
                placeholder="your name"
                type="text"
                isCurrent={false}
                updateSharedData={getName}
              />
              <button
                className="mx-auto my-2 block rounded border border-purple-500 bg-purple-700 px-4  py-2 text-2xl hover:bg-purple-600 active:bg-purple-800"
                type="submit"
              >
                Calculate
              </button>
            </BoxContainer>
          </form>
        </>
      )}
      <div className="flex w-full flex-col  gap-2 sm:w-[90%] sm:flex-col sm:justify-center sm:gap-4 md:w-[80%] md:flex-row  md:gap-8">
        <BoxContainer>
          <h1 className=" mb-3 text-center  text-2xl text-[#5DCBC4] sm:text-3xl md:text-4xl ">
            Quick Navigation
          </h1>
          <div className="flex flex-col space-y-2 ps-4">
            <span>1. Understanding Chronological Age Calculator </span>
            <span>2. What is Chronological Age?</span>
            <span>3. Need for Calculating Chronological Age</span>
            <span>4. Working Algorithm of this Calculator</span>
            <span>5. Age Save the Calculator as an App </span>
            <span>6.Summary</span>
          </div>
        </BoxContainer>

        <div className=" mb-auto h-auto">
          <div className="rounded-md border border-[#FFB777] px-4 py-2 shadow-md  shadow-[#FFB777]">
            <span className="mx-auto block text-center">
              Scroll for More Interesting <br /> Information
            </span>
          </div>
          <div className="w-full ">
            <BsChevronDoubleDown className="mx-auto text-[100px]" />
          </div>
        </div>
      </div>
      <div className="w-full space-y-8 sm:w-[90%]  md:w-[80%]">
        <BoxContainer heading="Understanding Chronological Age Calculator">
          A chronological age calculator is a utility tool that computes your
          age from birth to a given date. You can determine your chronological
          age by performing a simple calculation, that is, subtracting the date
          of birth from the date when asked. However, you don&#39;t need to
          apply this formula to obtain your age in the presence of this tool.
          Chronological age calculation is made easier with this advanced
          algorithmic tool.
          <br />
          <br />
          Our tool delivers accurate results, meaning it provides you with exact
          chronological age in years, months, and days format. Even while
          calculating for a leap year-born person, not a single day will miss
          from the age calculation process.
        </BoxContainer>
        <BoxContainer heading=" What is Chronological Age?">
          Firstly, you need to understand the definition of chronological order
          before differentiating age and chronological age. Chronological order
          is arranging or describing events that happened first to last between
          two given dates or intervals. <br /> <br />
          For instance, when you had to describe to someone the activities you
          have done during a weekend in chronological order, you should start
          listing from your first activity to the last without skipping one. It
          will let an audience look at a timeline clearly without missing
          valuable information.
          <br />
          <br />
          When we arrange dates in increasing order becomes a chronological
          date. Technically, age is a date. Hence, to determine your
          chronological age, you should start counting your age from the first
          given date (date of birth) to the last given date (the present day).
          <br />
          <span className="text-md my-4 block font-[100]">
            <i>
              Chronological order misses no events. Thus, while arranging dates
              in chronological order, we should always include days and months
              with the year.”
            </i>
          </span>
          <br /> Generally, we tell people our age in just years or the number
          of birthdays we have celebrated. The age we tell others in an informal
          way is our normal age. While chronological age is scribed in a formal
          manner in proper date, months, and years format so that not a single
          day will be missing from our age.
        </BoxContainer>
        <BoxContainer heading="  Need for Calculating Chronological Age">
          Why do we need to know our chronological age? Chronological age is
          necessary to partake in legal activities. It is always asked in
          government forms or by medical experts before continuing further
          process. <br /> <br />
          <span className=" mb-5 block">
            A few reasons for calculating chronological age are: -
          </span>
          <div className=" grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2">
            <BoxContainer
              containerClass=" px-2 sm:px-3 md:px-4 py-5 "
              headingClass=" mb-5 "
              contentClass=""
              heading="Voting"
            >
              Citizens are eligible to elect their leader after reaching the
              minimum age requirement. There are various age requirements in
              different countries for voting. Chronological age is essential to
              prevent the minor age group from participating in the election to
              maintain the quality of democracy.
            </BoxContainer>
            <BoxContainer
              containerClass=" px-2 sm:px-3 md:px-4 py-5 "
              headingClass=" mb-5 "
              heading="Driver License"
            >
              Students are asked to reveal their chronological age before giving
              a driving test for a license. Candidates below the required age
              will be ineligible to get a driving license. Government implements
              this rule to lower rates of crashes and increase road safety.
            </BoxContainer>
            <BoxContainer
              containerClass=" px-2 sm:px-3 md:px-4 py-5 "
              headingClass=" mb-5 "
              heading="Employment"
            >
              Age is one of the criteria for jobs. Employers ask for
              chronological age to ensure you meet the legal minimum working age
              law. Different jobs need employees from diverse age groups. Hence,
              it is crucial to know your chronological age before applying for
              jobs.
            </BoxContainer>
            <BoxContainer
              containerClass=" px-2 sm:px-3 md:px- py-5
               "
              headingClass=" mb-5 "
              heading="Healthcare"
            >
              Age benefits are categorized into various range of age groups. To
              acquire certain health benefits, you should know your
              chronological age. Utilize this chronological age calculator to
              know your age and search on the internet for health facilities you
              can gain.
            </BoxContainer>
          </div>
        </BoxContainer>
        <BoxContainer heading="Working Algorithm of this Calculator">
          Our calculator works on the input you have given to it, for example,
          your date of birth and the current date. The calculation process may
          seem time taking. But the algorithm of this tool makes this happens in
          a few seconds.  <br />
          <br />
          We program the script of this age calculator with formulae and a few
          basic maths logic so that you can get accurate results. Generally,
          other calculators fail to count leap years in your chronological age.
          But this calculator follows all the laws of chronological order,
          delivering the correct age with no missing days.
          <br />
          <br />
          This calculator work in a few steps.
          <br /> <br />
          <div className="flex flex-col space-y-2 ps-4">
            <span>1. The user gives the input to the computer.</span>
            <span>
              2. Clicking the calculate button triggers the script to start
              running.
            </span>
            <span>
              3. The computer script performs a mathematical calculation using
              formulas that are programmed.
            </span>
            <span>
              4. The code executes Subtraction, Addition, and Multiplication
              actions (depending on input) to deliver precise results.
            </span>
            <span>
              5. After processing, the tool format the results in chronological
              order (DD-MM-YY) to display the final result.{" "}
            </span>
            <span>
              This time-consuming process happens in a few seconds as it is also
              optimized for speed.
            </span>
          </div>
          <br />
          So, it is how the algorithm of this tool works. However, we have not
          revealed the formulas this tool utilizes to calculate age. It is a
          vast mathematical topic to cover later.
        </BoxContainer>
        <BoxContainer heading="Different terms for Age">
          You are wrong if you think that a person&#39;s age can only be
          expressed in numbers. Age is categorized into different types, from
          which we have learned about chronological age.
          <br />
          <br />
          The age classification is beneficial to inspect an individual&#39;s
          physical, mental, and emotional health and its impact on their quality
          of life.
          <br /> <br />
          <span className="text-2xl underline">Age is Just Not a Number</span>
        </BoxContainer>

        <BoxContainer heading="Appearance Age">
          Appearance age or perceived age describes how young you look.
          Scientifically, people look visually older as their chronological age
          increases. However, this is not the case with many individuals. Some
          people look 20 years old at their 30 while some look 40 years old at
          their 30. Estimating a person&#39;s age on the basis of their physical
          characteristics like look, beauty, personality, etc is appearance age.
          <br />
          <br />
          In this modern era, where people judge you on your looks, it is
          essential to know your appearance age. It provides a standard to
          estimate overall health conditions in the elder ones. Appearance age
          is crucial for fashion enthusiast models and cosmetics companies.
        </BoxContainer>
        <BoxContainer heading="Biological Age">
          Biological age, also known as Physiological age, indicates the
          functional capacity of the human body and how long a person will live.
          True Biological age is calculated with the help of biomarkers
          (Measurable Indicators of Biological State) in the process called
          biomarkers of aging.  <br /> <br />
          Medical evidence is required to measure Biological age. Your
          biological age may differ depending on your health condition, while
          chronological age is unalterable.  <br /> <br />
          Biological age is crucial to predict proneness to age-related diseases
          and lifespan as it provides precise standards. Your Biological age can
          be higher or lower than your chronological age and is totally
          controllable. You may become biologically younger by adopting a
          healthy lifestyle.
        </BoxContainer>
        <BoxContainer headingClass="w-full" heading="Mental Age">
          Mental age is a measure of intelligence performance level compared to
          average intelligence based on chronological age. The individual will
          be considered normal if his/her mental age is the same as
          chronological age. Mental age and chronological age provide a standard
          to measure the Intelligent quotient. <br />
          <br />
          The formula is IQ = MA/CA X 100
          <br />
          <br />
          Alfred Binet, a French psychologist, discovered the concept of mental
          age in 1905. Mental age is estimated based on a standardized mean
          score and a child&#39;s performance score on a traditional
          Neuropsychological or Intelligence test. For Instance, if the
          standardized mean score for 5 yrs child is 7/20, then 11 yrs child who
          scores 7/20 will have a mental age of 5 years.  <br />
          <br />
          Binet, with his colleague Theodore Simon, created the first
          Intelligence test in 1905. Later, Stanford psychologist Lewis Terman
          revised this test and created a new edition of the Intelligence test
          known as Stanford–Binet Intelligence Scales in 1916. Today, it is
          widely used for educational placement, career assessment, career
          assessment, and other purposes where psychological evidence is
          required. <br />
          <br />
          Mental age is frequently measured in child to determine reasoning,
          judging, and comprehending abilities, while it is less significant for
          adult as intelligence growth become slower.
        </BoxContainer>
        <BoxContainer heading="Functional Age">
          Functional age aims to examine the functional capacity of a person
          according to strength indexed based on chronological age. The
          Functional capacity includes both physical and mental functioning. The
          Functional age of a person with a disability is either not calculated
          or considered zero. <br />
          <br /> Functional age is important to determine if a person can
          perform specific work on the provided scale. Factors like stamina,
          speed, and agility come into consideration while measuring functional
          age. <br />
          <br />
          An employer can ask for functional age while hiring to ensure the
          candidate can perform assigned tasks according to given standards.
          Also, knowing your functional age can help you decide whether you
          should continue to work on jobs or get retired.
        </BoxContainer>
        <BoxContainer heading="Social Age">
          Social age checks a person&#39;s ability to participate in social
          engagement. The social age is more about behavior or interpersonal
          ability rather than logical ability. 
          <br />
          <br />
          The more social age, the more the person will mature. The maturity
          level of a person is standardized by society for various chronological
          age groups of people to measure social age. Social interaction of
          individuals toward societal norms may affect social age.
          <br />
          <br />
          While measuring social age below behavior are noticed by society: -
          <br />
          <br />
          <ul className="ms-8 list-disc">
             <li>Relations with friends and family </li>
            <li>Relation with life partner</li>
            <li>Social interaction</li>
            <li>Life experience gained from culture or events</li>
            <li>A person needs and wants</li>
            <li>Person friend circle</li>
          </ul>{" "}
          <br />
          Behavioral expectations may differ for various societies based on
          culture.Social aging of introverts, extroverts, and ambiverts may
          differ depending on civilization and these people are mostly affected
          by the social age factor.
        </BoxContainer>
        <BoxContainer heading="Save the Calculator as an App">
          When we need to calculate chronological age, opening this webpage
          every time can be hectic. Adding a chronological age calculator on the
          home screen is the best solution to this problem. It will let you
          navigate to this calculator quickly and save time. Let&#39;s see how:-{" "}
          <br />
          <br />
          <ul className="ms-8 list-disc">
            <h1 className="text-center text-xl text-[#5DCBC4] sm:text-start sm:text-2xl md:text-3xl">
              Desktop App
            </h1>
             <li>Open the webpage on the chrome browser. </li>
            <li>Click on the 3 dots in the top right corner.</li>
            <li>Navigate to More tools &gt;&gt; Create shortcut.</li>
            <li>
              Tick the &quot;Open as window&quot; option, then click create.
            </li>
            <li>
              On Firefox, click and hold the padlock icon, then drag the pointer
              to the desktop.Then release the mouse button to create a shortcut.
            </li>
            <li>Person friend circle</li>
          </ul>
          <br />
          Now you can access it without opening the browser. You don&#39;t even
          need to remember the URL.
          <br />
          <br />
          <ul className="ms-8 list-disc">
            <h1 className="text-center text-xl text-[#5DCBC4] sm:text-start sm:text-2xl md:text-3xl">
              Mobile App
            </h1>
             <li>Open this calculator in your Android Chrome Browser.</li>
            <li>Click on the 3 dots in the top right corner.</li>
            <li>Now, select &quot;Add to Home Screen.&quot;. </li>
            <li>If you are using iOS, use Safari.</li>
            <li>Click on &quot;Share Button&quot;.</li>
            <li>Make the &quot;Add to Home Screen&quot; selection.</li>
          </ul>
          <br />
          Now you can use this calculator as an application on your Android or
          iOS device.
        </BoxContainer>
        <br />
        <br />
        <BoxContainer heading="Summary">
          This chronological age calculator will always be available for our
          users for free. We hope the tool is worthwhile for our users. We try
          to bring more and better on this website. <br />
          <br />
          Our users can access this webpage anytime for learning purposes. This
          webpage covers comprehensive information about the topic of
          Chronological Age and different types of age. The information given on
          this webpage is a result of deep research. The only intention of the
          author is to provide knowledge to the user without letting them leave
          this page in search of information on other domains on the internet.
          The content provided on this webpage is for our respected users and
          not for search engines. <br /> <br />
          We don&#39;t ask our users for a single penny or donations to access
          this tool. Lastly, we won&#39;t go against our user&#39;s will and
          consent. Hence, using this chronological age calculator is a
          Recommendation and ain&#39;t a Request.
        </BoxContainer>
      </div>
    </section>
  );
}

export default InfoSection;
