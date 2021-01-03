// Skills Icons
import pythonIcon from "./images/python.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"

import codeIcon from "./images/code.svg"
import javaIcon from "./images/java.svg"

import search_1 from "./images/workImg/search_1.png"
import realestate_1 from "./images/workImg/realestate_1.png"
import instagram_1 from "./images/workImg/instagram_1.png"
import cutshoe_1 from "./images/workImg/cutshoe_1.png"

// Social Icon
import githubIcon from "./images/github.svg"

//pictures

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "용건",
  headerTagline: [
    //Line 1 For Header
    "끈기있게.",
    //Line 2 For Header
    "한번 더.",
    //Line 3 For Header
    "끝까지.",
  ],
  //   Header Paragraph
  headerParagraph:
    "'포기하고 싶을 때 한번 더', 저의 좌우명을 바탕으로 '비프로 컴퍼니'에서 일하고 싶어 지원하였습니다.",

  //Contact Email
  contactEmail: "kyg0752@naver.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "검색페이지 구현", //Project Title - Add Your Project Title Here
      para:
        "React.js, Sass, Axios, Cheerio, NaverAPI", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      search_1
        ,
      //Project URL - Add Your Project Url Here
      url1: "https://yg-kim-korean.github.io/get_pictures_from_google/",
      url2: "https://github.com/yg-kim-korean/get_pictures_from_google",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "인스타그램 클론 페이지 구현", //Project Title - Add Your Project Title Here
      para:
        "React.js, CSS, Firebase", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      instagram_1
        ,
      //Project URL - Add Your Project Url Here
      url1: "https://react-instagram-clone-5e019.web.app",
      url2: "https://github.com/yg-kim-korean/react-instagram-clone",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "신발 커스터마이징 추천 서비스", //Project Title - Add Your Project Title Here
      para:
        "Python, TensorFlow, AI Algorithm(Mask R-CNN, GrabCut, K-means)", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      cutshoe_1
        ,
      //Project URL - Add Your Project Url Here
      url1: "https://drive.google.com/file/d/1egQ23YYhpvecP4axEfzgLM1yNGYpZbaY/view?usp=sharing",
      url2:'',
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "부동산 홈페이지 구현", //Project Title - Add Your Project Title Here
      para:
        "React.js, Sass, Django", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        realestate_1,
      //Project URL - Add Your Project Url Here
      url1: "https://drive.google.com/file/d/1rOmNrFLFwklr7rBzEN2BjJxw8uyX01Tu/view?usp=sharing",
      url2:'https://github.com/yg-kim-korean/react-django-practice-2-realsetestate',
    },
    // {
    //   id: 5, //DO NOT CHANGE THIS (Please)😅
    //   title: "Project Five", //Project Title - Add Your Project Title Here
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
    //   //Project Image - Add Your Project Image Here
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
    //   //Project URL - Add Your Project Url Here
    //   url: "http://chetanverma.com/",
    // },
    // {
    //   id: 6, //DO NOT CHANGE THIS (Please)😅
    //   title: "Project Six", //Project Title - Add Your Project Title Here
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
    //   //Project Image - Add Your Project Image Here
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
    //   //Project URL - Add Your Project Url Here
    //   url: "http://chetanverma.com/",
    // },

    /*
    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
    ,{
        id: 5,
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    " 컴퓨터 공학과를 졸업하여 건설회사 전산팀으로 첫 번째 경력을 쌓았습니다. 하지만, 가장 하고 싶은 일이 무엇인지 생각하며 미래를 그려보았습니다.",
  aboutParaTwo:
    " 데이터베이스, SQL 튜닝을 경험하며 빅데이터를 활용한 기술력을 쌓으려고 노력하였고, 인공지능 교육을 수강하며 더 많은 경험을 하기 위해 노력하였습니다.",
  aboutParaThree:
    " 그 와중, '비프로 컴퍼니'를 알게 되었고, 제가 하고 싶은 일이 무엇인지를 깨달았습니다. 인생에서 축구를 빼놓고 살 수 없는 제가, 이 회사를 알게 되면서 다시 한번 어떤 것이 하고 싶은 것인지 깨닫게 되었고, 지원할 수 있는 직무 중 제가 노력해서 얻어낼 수 있는 React.JS를 공부하며 꿈을 키우고 있습니다.",
  aboutImage:
    "https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",


  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      img: pythonIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 2,
      img: cssIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 3,
      img: jsIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 4,
      img: reactIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 5,
      img: javaIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      id: 6,
      img: codeIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Goal",
  promotionPara:
    "대학생 이후 프론트엔드 개발에 몰두 하도록 만든 이유는 단, 하나 '비프로 컴퍼니의 채용공고' 였습니다. 어느곳보다 다니고 싶은 회사라고 생각하는 지금, 부족한 기술을 보완시켜 비프로 컴퍼니에 어울리는 인재가 되어 고객을 위한 서비스를 제공하기 위해 노력하겠습니다.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/yg-kim-korean" },
    
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
