/*
  Amathuba data file. Edit this file to add, remove or update opportunities.
  Copyright (c) 2026 Onele Nongindzi. All rights reserved.

  EDUCATION LEVELS: 0 Below Grade 9, 1 Grade 9-11, 2 Matric, 3 Certificate/N-cert/NC(V), 4 Diploma, 5 Degree, 6 Honours or higher
  AGE GROUPS:       0 Under 18, 1 = 18-24, 2 = 25-34, 3 = 35+

  Each opportunity:
    g: group heading, t: title, d: description, u: official link
    levels: education levels it is meant for (only these levels will see it)
    ages:   age groups allowed
    quals:  (optional) qualification or interest codes. If set, ONLY people with that code see it.
            Leave it out for general opportunities open to everyone at those levels.
*/

// Matric and below choose the work they are interested in. titles: [below matric, matric]
window.AMATHUBA_INTERESTS = {
  it:     {name:"IT and computers",                titles:[["Data capturer trainee","Call centre agent"],["Data capturer","Call centre agent","IT help desk trainee"]]},
  edu:    {name:"Education and childcare (ECD)",   titles:[["Crèche assistant","Classroom helper"],["ECD assistant","Teacher assistant","Tutor"]]},
  biz:    {name:"Business, admin and retail",      titles:[["Shop assistant","Packer","Shelf packer"],["Cashier","Admin clerk","Receptionist","Sales assistant"]]},
  health: {name:"Health and care work",            titles:[["Home-based carer","Hospital cleaner"],["Community health worker","Care worker","Pharmacy assistant"]]},
  trade:  {name:"Building and trades",             titles:[["General worker","Construction labourer"],["Apprentice electrician","Plumber’s assistant","Welder trainee"]]},
  agri:   {name:"Farming and agriculture",         titles:[["Farm worker","Garden worker"],["Farm assistant","Nursery worker","Tea estate worker"]]},
  tour:   {name:"Hospitality and tourism",         titles:[["Kitchen assistant","Housekeeper","Waiter"],["Tour guide trainee","Front desk agent","Cook"]]},
  any:    {name:"Not sure yet",                    titles:[["General worker","Shop assistant"],["Admin clerk","Call centre agent","Sales assistant"]]},
};

// Certificate and higher choose their qualification. levels = levels where this qualification exists.
// titles: cert = certificate/N-cert, dip = diploma, deg = degree and higher
window.AMATHUBA_QUALS = {
  civil:   {name:"Civil engineering",                    levels:[3,4,5,6], titles:{cert:["Civil engineering assistant","Site assistant"],dip:["Civil engineering technician","Junior site agent","Roads technician"],deg:["Graduate civil engineer","Civil engineering intern","Junior civil engineer"]}},
  elec:    {name:"Electrical engineering",               levels:[3,4,5,6], titles:{cert:["Electrical assistant","Apprentice electrician"],dip:["Electrical engineering technician","Maintenance technician"],deg:["Graduate electrical engineer","Electrical engineering intern"]}},
  mech:    {name:"Mechanical engineering",               levels:[3,4,5,6], titles:{cert:["Mechanical fitter apprentice","Maintenance assistant"],dip:["Mechanical engineering technician","Maintenance planner"],deg:["Graduate mechanical engineer","Mechanical engineering intern"]}},
  it:      {name:"IT / Computer science",                levels:[3,4,5,6], titles:{cert:["IT support assistant","Data capturer"],dip:["IT technician","Junior developer","Network support technician"],deg:["Graduate software developer","Junior data analyst","Systems analyst"]}},
  teach:   {name:"Teaching (B.Ed / PGCE)",               levels:[5,6],     titles:{cert:[],dip:[],deg:["Foundation phase teacher","Intermediate phase teacher","Senior phase teacher"]}},
  ecd:     {name:"Early childhood development (ECD)",    levels:[3,4,5,6], titles:{cert:["ECD practitioner","Crèche teacher"],dip:["ECD practitioner","ECD centre supervisor"],deg:["ECD centre manager","Foundation phase teacher"]}},
  nurse:   {name:"Nursing",                              levels:[3,4,5,6], titles:{cert:["Enrolled nursing auxiliary","Auxiliary nurse"],dip:["Enrolled nurse","Staff nurse"],deg:["Professional nurse","Community service nurse"]}},
  acc:     {name:"Accounting / Finance",                 levels:[3,4,5,6], titles:{cert:["Bookkeeping clerk","Creditors clerk"],dip:["Junior accountant","Payroll administrator","Finance clerk"],deg:["Trainee accountant","Trainee auditor","Graduate finance analyst"]}},
  admin:   {name:"Business / Public admin / HR",         levels:[3,4,5,6], titles:{cert:["Office administrator","Receptionist"],dip:["HR assistant","Administration officer","Procurement clerk"],deg:["HR graduate intern","Administration officer","Junior project coordinator"]}},
  agri:    {name:"Agriculture",                          levels:[3,4,5,6], titles:{cert:["Farm supervisor","Agricultural assistant"],dip:["Agricultural technician","Extension officer"],deg:["Agricultural scientist","Agronomist","Farm manager"]}},
  hosp:    {name:"Hospitality / Tourism",                levels:[3,4,5,6], titles:{cert:["Commis chef","Front office agent"],dip:["Tourism officer","Guest house supervisor","Events coordinator"],deg:["Tourism development officer","Hospitality manager"]}},
  law:     {name:"Law (LLB)",                            levels:[5,6],     titles:{cert:[],dip:[],deg:["Candidate attorney","Legal intern","Paralegal"]}},
  socwork: {name:"Social work",                          levels:[5,6],     titles:{cert:[],dip:[],deg:["Social worker","Social work intern","Child protection officer"]}},
  trade:   {name:"Trades (electrician, plumbing, welding)", levels:[3,4],  titles:{cert:["Apprentice electrician","Apprentice plumber","Welder"],dip:["Artisan","Maintenance technician"],deg:[]}},
  other:   {name:"Other qualification",                  levels:[3,4,5,6], titles:{cert:["Administrative assistant"],dip:["Graduate intern","Administration officer"],deg:["Graduate trainee","Graduate intern"]}},
};

const ALL = [0,1,2,3,4,5,6], ADULT = [1,2,3], YOUTH = [1,2];

window.AMATHUBA_OPPS = [
 // ---------- General (no quals: shown to everyone at these levels) ----------
 {g:"Register for job matching",t:"Employment Services of South Africa (ESSA)",d:"The Department of Employment and Labour’s free job-seeker database. Government and employers search it for candidates. You need an ID number and email address.",u:"https://essa.labour.gov.za/EssaOnline/WebBeans/",levels:ALL,ages:ADULT},
 {g:"Register for job matching",t:"SA Youth",d:"Free national network for young people looking for work and learning. The mobile site is zero-rated on most networks.",u:"https://sayouth.mobi",levels:[0,1,2,3,4,5],ages:YOUTH},
 {g:"Find work",t:"Government jobs: Public Service Vacancy Circular",d:"Weekly list of government posts. Each post states the exact qualification it needs. Apply with the Z83 form.",u:"https://www.dpsa.gov.za",levels:ALL,ages:ADULT},
 {g:"Find work",t:"Expanded Public Works Programme (EPWP)",d:"Short-term paid work on community projects. Intakes are run through the municipality: ask Ingquza Hill Municipality or your ward councillor.",u:"https://www.publicworks.gov.za",levels:[0,1,2],ages:ADULT},
 {g:"Find work",t:"Harambee Youth Employment Accelerator",d:"Prepares young people with matric for entry-level jobs and connects them with employers.",u:"https://www.harambee.co.za",levels:[2,3],ages:YOUTH},
 {g:"Find work",t:"YES (Youth Employment Service)",d:"Paid 12-month work experience with companies for young people.",u:"https://www.yes4youth.co.za",levels:[2,3,4],ages:YOUTH},
 {g:"Find work",t:"Government graduate internships",d:"Departments offer 12 to 24-month paid internships for diploma and degree holders, usually up to age 35. Search the circular for “internship” plus your field.",u:"https://www.dpsa.gov.za",levels:[4,5,6],ages:YOUTH},
 {g:"Study further",t:"Second Chance Matric Programme",d:"Free support from the Department of Basic Education to finish or improve your matric.",u:"https://www.education.gov.za",levels:[0,1],ages:ADULT},
 {g:"Study further",t:"NSFAS funding",d:"Government funding for study at public TVET colleges and universities for students from low-income homes.",u:"https://www.nsfas.org.za",levels:[1,2,3],ages:[0,1,2,3]},
 {g:"Study further",t:"ZA Bursaries",d:"Free list of bursaries by field of study.",u:"https://www.zabursaries.co.za",levels:[2,3,4],ages:[0,1,2]},
 {g:"Start your own business",t:"NYDA grants and support",d:"Grants, mentorship and business training for young entrepreneurs.",u:"https://www.nyda.gov.za",levels:ALL,ages:YOUTH},

 // ---------- Learnerships for matric and below (by interest) ----------
 {g:"Learnerships for you",t:"MICT SETA",d:"Learnerships in IT, media and telecommunications.",u:"https://www.mict.org.za",levels:[2,3,4,5],ages:ADULT,quals:["it"]},
 {g:"Learnerships for you",t:"ETDP SETA",d:"Learnerships and funding in education and early childhood development (ECD).",u:"https://www.etdpseta.org.za",levels:[1,2,3,4],ages:ADULT,quals:["edu","ecd"]},
 {g:"Learnerships for you",t:"HWSETA",d:"Learnerships in health and social development, including care work.",u:"https://www.hwseta.org.za",levels:[1,2,3],ages:ADULT,quals:["health","nurse"]},
 {g:"Learnerships for you",t:"AgriSETA",d:"Learnerships and skills programmes in farming and agriculture.",u:"https://www.agriseta.co.za",levels:[1,2,3,4],ages:ADULT,quals:["agri"]},
 {g:"Learnerships for you",t:"Services SETA",d:"Learnerships in office administration, retail and business services.",u:"https://www.serviceseta.org.za",levels:[2,3,4],ages:ADULT,quals:["biz","admin"]},
 {g:"Learnerships for you",t:"CATHSSETA",d:"Learnerships in hospitality, tourism, culture and sport.",u:"https://www.cathsseta.org.za",levels:[2,3,4],ages:ADULT,quals:["tour","hosp"]},
 {g:"Learnerships for you",t:"merSETA apprenticeships",d:"Apprenticeships in trades such as fitting, motor mechanics and welding. Maths and science help.",u:"https://www.merseta.org.za",levels:[1,2,3,4],ages:ADULT,quals:["trade","mech"]},
 {g:"Learnerships for you",t:"CETA",d:"Construction learnerships and skills programmes, from site work to civil engineering support.",u:"https://www.ceta.org.za",levels:[1,2,3,4],ages:ADULT,quals:["trade","civil"]},
 {g:"Learnerships for you",t:"EWSETA",d:"Learnerships in electricity, water and energy, including electrician training.",u:"https://www.ewseta.org.za",levels:[2,3,4],ages:ADULT,quals:["trade","elec"]},
 {g:"Learnerships for you",t:"WeThinkCode_",d:"Free coding school for young people. No degree needed: you are selected through online tests.",u:"https://www.wethinkcode.co.za",levels:[2,3,4],ages:YOUTH,quals:["it"]},
 {g:"Study further",t:"Funza Lushaka teaching bursary",d:"Covers study costs for a teaching degree in priority subjects. You teach in a public school for each year funded.",u:"https://www.funzalushaka.doe.gov.za",levels:[2,3,4],ages:[0,1,2],quals:["edu","ecd","teach"]},

 // ---------- Qualification-specific (certificate and higher) ----------
 // Civil engineering
 {g:"Made for your qualification",t:"MISA Young Graduate Programme",d:"Two to three-year paid placements in municipalities for civil and electrical engineering graduates, working towards professional registration. Usually opens around December/January.",u:"https://www.misa.gov.za",levels:[4,5,6],ages:YOUTH,quals:["civil","elec"]},
 {g:"Made for your qualification",t:"ECSA candidate registration",d:"Register as a candidate engineer, technologist or technician with the Engineering Council of South Africa. Many employers require it.",u:"https://www.ecsa.co.za",levels:[4,5,6],ages:ADULT,quals:["civil","elec","mech"]},
 {g:"Made for your qualification",t:"SAICE (South African Institution of Civil Engineering)",d:"Student and graduate membership, job board and mentoring towards registration.",u:"https://saice.org.za",levels:[4,5,6],ages:ADULT,quals:["civil"]},
 {g:"Made for your qualification",t:"SANRAL careers and bursaries",d:"The national roads agency hires and trains civil engineers and technicians.",u:"https://www.nra.co.za",levels:[4,5,6],ages:ADULT,quals:["civil"]},
 {g:"Made for your qualification",t:"Eskom careers",d:"Graduate and technician opportunities in electrical and mechanical engineering.",u:"https://www.eskom.co.za",levels:[4,5,6],ages:ADULT,quals:["elec","mech"]},
 // IT
 {g:"Made for your qualification",t:"CAPACITI",d:"Free digital skills and work-readiness programmes for young people in tech, with job placement support.",u:"https://www.capaciti.org.za",levels:[3,4,5,6],ages:YOUTH,quals:["it"]},
 // Teaching
 {g:"Made for your qualification",t:"SACE registration",d:"You must register with the South African Council for Educators before you can teach.",u:"https://www.sace.org.za",levels:[5,6],ages:ADULT,quals:["teach"]},
 {g:"Made for your qualification",t:"Eastern Cape Department of Education posts",d:"Teaching posts and bulletins for Eastern Cape schools.",u:"https://www.eceducation.gov.za",levels:[5,6],ages:ADULT,quals:["teach"]},
 // Nursing
 {g:"Made for your qualification",t:"SANC registration",d:"Register with the South African Nursing Council before you can practise.",u:"https://www.sanc.co.za",levels:[3,4,5,6],ages:ADULT,quals:["nurse"]},
 {g:"Made for your qualification",t:"Eastern Cape Department of Health vacancies",d:"Nursing and health posts in Eastern Cape hospitals and clinics, including St Elizabeth’s in Lusikisiki.",u:"https://www.echealth.gov.za",levels:[3,4,5,6],ages:ADULT,quals:["nurse"]},
 // Accounting
 {g:"Made for your qualification",t:"AGSA trainee auditor scheme",d:"The Auditor-General’s training programme towards becoming a chartered accountant.",u:"https://www.agsa.co.za",levels:[5,6],ages:YOUTH,quals:["acc"]},
 {g:"Made for your qualification",t:"SAICA training contracts",d:"Find accredited employers for your CA(SA) training contract.",u:"https://www.saica.org.za",levels:[5,6],ages:ADULT,quals:["acc"]},
 {g:"Made for your qualification",t:"SAIPA",d:"Professional accountant registration and trainee programmes.",u:"https://www.saipa.co.za",levels:[4,5,6],ages:ADULT,quals:["acc"]},
 {g:"Made for your qualification",t:"FASSET",d:"Finance and accounting learnerships and work experience.",u:"https://www.fasset.org.za",levels:[3,4,5],ages:YOUTH,quals:["acc"]},
 // Admin / HR
 {g:"Made for your qualification",t:"PSETA",d:"Public service internships and learnerships in administration and HR.",u:"https://www.pseta.gov.za",levels:[3,4,5,6],ages:YOUTH,quals:["admin"]},
 // Law
 {g:"Made for your qualification",t:"Legal Aid South Africa candidate attorneys",d:"Paid two-year articles for LLB graduates.",u:"https://legal-aid.co.za",levels:[5,6],ages:ADULT,quals:["law"]},
 {g:"Made for your qualification",t:"Legal Practice Council",d:"Registration of candidate legal practitioners and the practical vocational training rules.",u:"https://www.lpc.org.za",levels:[5,6],ages:ADULT,quals:["law"]},
 // Social work
 {g:"Made for your qualification",t:"SACSSP registration",d:"Register with the South African Council for Social Service Professions before you can practise.",u:"https://www.sacssp.co.za",levels:[5,6],ages:ADULT,quals:["socwork"]},
];
