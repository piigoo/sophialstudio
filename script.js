function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // Made by Yago Estévez (Twitter: @yagoestevez.com)


/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: `menu-container ${props.showMenu}` }, /*#__PURE__*/
    React.createElement("div", { className: "overlay" }), /*#__PURE__*/
    React.createElement("div", { className: "menu-items" }, /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "HOME")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "ABOUT")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#projects", onClick: props.toggleMenu }, "PORTFOLIO")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#journey", onClick: props.toggleMenu }, "JOURNEY"))), /*#__PURE__*/




    React.createElement(SocialLinks, null))));



};


/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("nav", { id: "navbar" }, /*#__PURE__*/
    React.createElement("div", { className: "nav-wrapper" }, /*#__PURE__*/
    React.createElement("p", { className: "brand" }, "Sophia L", /*#__PURE__*/

    React.createElement("strong", null, "_Studio")), /*#__PURE__*/

    React.createElement("a", {
      onClick: props.toggleMenu,
      className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button' }, /*#__PURE__*/

    React.createElement("span", null))))));





};



/***********************
  Header Component
 ***********************/

const Header = props => {
  return /*#__PURE__*/(
    React.createElement("header", { id: "welcome-section" }, /*#__PURE__*/
    React.createElement("div", { className: "forest" }), /*#__PURE__*/
    React.createElement("div", { className: "silhouette" }), /*#__PURE__*/
    React.createElement("div", { className: "moon" }), /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("h1", null, /*#__PURE__*/
    React.createElement("span", { className: "line" }, "Sophia's"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, "Art practise"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, /*#__PURE__*/
    React.createElement("span", { className: "color" }, "&"), " Journey.")), /*#__PURE__*/


    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: "#projects" }, "my portfolio"), /*#__PURE__*/
    React.createElement("a", { href: "#contact", className: "cta" }, "My Art Journey")))));






};


/***********************
  About Component
 ***********************/

const About = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "about" }, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("article", null, /*#__PURE__*/
    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "Who am I?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc full" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "My name is Sophia."), /*#__PURE__*/
    React.createElement("p", null, "Hi, I'm a 17 years old student currently studying in Harrow Bangkok. I\u2019m an optimistic girl with tons of hobbies, but what makes me Sophia is my passion for art and design."), /*#__PURE__*/




    React.createElement("p", null, "I love creating beautiful things, and being called the \"DT Queen\" by my classmates inspired me to pursue design further.")), /*#__PURE__*/



    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "What I have done?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "I'm a designer."), /*#__PURE__*/
    React.createElement("p", null, "At the age of 9, I created and published a series of bilingual clay tutorial videos for children, combining language learning with creative craft-making. Additionally, I organized charity clay workshops and donated the proceeds to support education in rural areas. This marked my first endeavor in using design to make a positive impact on others."), /*#__PURE__*/




    React.createElement("p", null, "At 13, I had my first experience in a real company through a week-long UX internship. I collaborated with professionals to address actual business needs, interpreting user interviews, analyzing competitors, and creating personas, gaining valuable insights into design in practice.")), /*#__PURE__*/




    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "Also an entrepreneur."), /*#__PURE__*/
    React.createElement("p", null, "To realize my passion for design into business practise, I’ve created my personal fashion design portal on social media, and gained more than 1500 fans and 12K likes within a year and a half. Besides the creativity I’ve put into the designs, I also value discussions with my business partners’ future path highly. Having corporated with more than 10 shop managers, I construct business plans with them taking into account of the fashion trends, marketing tactics, and branding position of their business."), /*#__PURE__*/





    React.createElement("p", null, "User interfaces, brochures, fashion design, crafting... You name it! As I mentioned, creating pretty things is particularly important for me."))))));








};


/***********************
  Project Component
 ***********************/

const Project = props => {
  const tech = {
    sass: 'fab fa-sass',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    vue: 'fab fa-vuejs',
    d3: 'far fa-chart-bar',
    node: 'fab fa-node' };


  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return /*#__PURE__*/(
    React.createElement("div", { className: "project" }, /*#__PURE__*/
    React.createElement("a", { className: "project-link", href: link, target: "_blank", rel: "noopener noreferrer" }, /*#__PURE__*/
    React.createElement("img", { className: "project-image", src: props.img, alt: 'Screenshot of ' + props.title })), /*#__PURE__*/

    React.createElement("div", { className: "project-details" }, /*#__PURE__*/
    React.createElement("div", { className: "project-tile" }, /*#__PURE__*/
    React.createElement("p", { className: "icons" },
    props.tech.split(' ').map((t) => /*#__PURE__*/
    React.createElement("i", { className: tech[t], key: t }))),


    props.title, ' '),

    props.children, /*#__PURE__*/
    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: repo, target: "_blank", rel: "noopener noreferrer" }, "View source ", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" })), /*#__PURE__*/

    React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, "Try it Live ", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" }))))));





};



/***********************
  Projects Component
 ***********************/

  const Projects = props => {
    return React.createElement("section", { id: "projects" },
      React.createElement("div", { className: "projects-container" },
        React.createElement("div", { className: "heading" },
          React.createElement("h3", { className: "title" }, "My Art Works"),
          React.createElement("p", { className: "separator" }),
          React.createElement("p", { className: "subtitle" }, "Here's a list of the works I've produced"),
  
          React.createElement("div", { className: "projects-wrapper" },
  
            React.createElement(Project, {
              title: "My Art Practices.",
              img: 'https://sophial.studio/images/album/project_1.jpg',
              tech: "Art Practice",
              link: "https://sophial.studio/voyage-slider-gsap/index.html",
              repo: "https://github.com/yagoestevez/anonymous-message-board"
            },
              React.createElement("small", null, "Click the picture to view the works."),
              React.createElement("p", null, "This is a collection of my drawings and paintings.")
            ),
  
            React.createElement(Project, {
              title: "My fashion design.",
              img: 'https://sophial.studio/images/album/project_2.jpg',
              tech: "js node css",
              link: "https://sophial.studio/fashion_design/index.html",
              repo: "https://github.com/yagoestevez/fcc-stock-price-checker"
            },
              React.createElement("small", null, "Click the picture to view the works."),
              React.createElement("p", null, "Most of the fashion designs were created in the summer before my grade 9 study.")
            ),
  
            React.createElement(Project, {
              title: "My fashion show time.",
              img: 'https://sophial.studio/images/album/project_3.jpg',
              tech: "js node css",
              link: "https://sophial.studio/fashion_show/index.html",
              repo: "https://github.com/yagoestevez/fcc-personal-library"
            },
              React.createElement("small", null, "Click the picture to view the works."),
              React.createElement("p", null, "As a fashion designer and model in the school fashion show, I had the opportunity to showcase my creative designs while also experiencing firsthand the dynamics of modeling.")
            ),
  
            React.createElement(Project, {
              title: "Design in our iGEM project.",
              img: 'https://sophial.studio/images/album/project_4.jpg',
              tech: "js node css",
              link: "https://sophial.studio/iGEM/index.html",
              repo: "https://github.com/yagoestevez/fcc-issue-tracker"
            },
              React.createElement("small", null, "Click the picture to view the works."),
              React.createElement("p", null, "Yet another practice in the biological project, where I explore the innovative intersection of design and biotechnology.")
            ),
  
            React.createElement(Project, {
              title: "Crafting.",
              img: 'https://sophial.studio/images/album/project_5.jpg',
              tech: "js node css",
              link: "https://sophial.studio/crafting/index.html",
              repo: "https://github.com/yagoestevez/fcc-metric-imperial-converter/"
            },
              React.createElement("small", null, "Click the picture to view the works."),
              React.createElement("p", null, "Crafting has been one of my favorite hobbies ever since.")
            ),
  
            React.createElement(Project, {
              title: "My Art Journey.",
              img: 'https://sophial.studio/images/album/grow.png',
              tech: "js vue node css",
              link: "https://sophial.studio/journey/index.html",
              repo: "https://github.com/yagoestevez/exercise-tracker"
            },
              React.createElement("small", null, "Click the picture to view the works."),
              React.createElement("p", null, "This is a brief overview of my art journey.")
            )
  
          )
        )
      )
    );
  };
  



/***********************
  Contact Component
 ***********************/

function Contact(props) {
    return /*#__PURE__*/ (
        React.createElement("section", { id: "contact" }, /*#__PURE__*/
            React.createElement("div", { className: "container" }, /*#__PURE__*/
                React.createElement("div", { className: "heading-wrapper" }, /*#__PURE__*/
                    React.createElement("div", { className: "heading" }, /*#__PURE__*/
                        React.createElement("p", { className: "title" }, "Want to ", /*#__PURE__*/
                            React.createElement("br", null), "contact me?"), /*#__PURE__*/


                        React.createElement("p", { className: "separator" }), /*#__PURE__*/
                        React.createElement("p", { className: "subtitle" }, "Please, use the form below or send an email to ",
                            '', /*#__PURE__*/
                            React.createElement("span", { className: "mail" }, "web", /*#__PURE__*/

                                React.createElement("i", { className: "fas fa-at at" }), "yagoestevez", /*#__PURE__*/

                                React.createElement("i", { className: "fas fa-circle dot" }), "com"), ":")), /*#__PURE__*/





                    React.createElement(SocialLinks, null)), /*#__PURE__*/

                React.createElement("form", { id: "contact-form", action: "#" }, /*#__PURE__*/
                    React.createElement("input", { placeholder: "Name", name: "name", type: "text", required: true }), /*#__PURE__*/
                    React.createElement("input", { placeholder: "Email", name: "email", type: "email", required: true }), /*#__PURE__*/
                    React.createElement("textarea", { placeholder: "Message", type: "text", name: "message" }), /*#__PURE__*/
                    React.createElement("input", { className: "button", id: "submit", value: "Submit", type: "submit" })))));




}



/***********************
  Footer Component
 ***********************/

const Footer = props => {
  return /*#__PURE__*/(
    React.createElement("footer", null, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("h3", null, "THANKS FOR VISITING"), /*#__PURE__*/
    React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " Yago Est\xE9vez."), /*#__PURE__*/
    React.createElement(SocialLinks, null))));



};




/***********************
  Social Links Component
 ***********************/

const SocialLinks = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "social" }, /*#__PURE__*/
    React.createElement("a", {
      href: "https://twitter.com/yagoestevez",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Twitter profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-twitter" })), /*#__PURE__*/

    React.createElement("a", {
      id: "profile-link",
      href: "https://github.com/yagoestevez",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's GitHub Profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-github" })), /*#__PURE__*/

    React.createElement("a", {
      href: "https://codepen.io/yagoestevez",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Codepen Profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-codepen" }))));



};



/***********************
  Main Component
 ***********************/

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      menuState: false });_defineProperty(this, "toggleMenu",


    () => {
      this.setState(state => ({
        menuState: !state.menuState ?
        'active' :
        state.menuState === 'deactive' ?
        'active' :
        'deactive' }));

    });}

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Header, null), /*#__PURE__*/
      React.createElement(About, null), /*#__PURE__*/
      React.createElement(Projects, null), /*#__PURE__*/
      React.createElement(Contact, null), /*#__PURE__*/
      React.createElement(Footer, null)));


  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
      header.style.visibility = header.style.visibility === 'hidden' && 'visible';else
      header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');else
      navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth' });

          });
        }
      }
    })();
  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));
