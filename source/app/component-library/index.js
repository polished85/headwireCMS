
/* get html components */
import html_h1 from './html/h1/'
import html_h2 from './html/h2/'
import html_h3 from './html/h3/'
import html_h4 from './html/h4/'
import html_h5 from './html/h5/'
import html_h6 from './html/h6/'
import html_p from './html/p/'
import html_hr from './html/hr/'
import html_img from './html/img/'
import html_header from './html/header/'
import html_footer from './html/footer/'
import html_section from './html/section/'
import html_div from './html/div/'

// get all bootstrap components
import bs_container	 from './bootstrap/container/'
import bs_row 	 	 from './bootstrap/row/'
import bs_column 	 from './bootstrap/column/'

// custom
import drop_zone from './custom/drop_zone/'

/* put all components into array */
const componentLibrary = [
	html_h1,
	html_h2,
	html_h3,
	html_h4,
	html_h5,
	html_h6,
	html_p,
	html_hr,
  html_img,
	html_header,
	html_footer,
	html_section,
	html_div,
  bs_container,
  bs_row,
  bs_column,
  drop_zone
]

export default componentLibrary
