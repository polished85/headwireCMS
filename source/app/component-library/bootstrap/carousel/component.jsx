
const BSCarouselIndicator = ({
    carouselId,
    index
}) => {
    var indicatorClass
    index === 0 ? indicatorClass = 'active' : ''
    var dataTarget = '#' + carouselId
    return(
        <li data-target={dataTarget} data-slide-to={index} className={indicatorClass} />
    )  
}

// var BSCarouselIndicator = React.createClass({
//   render: function(){
//     var carouselId = this.props.carouselId
//     var slideIndex = this.props.index
//     var indicatorClass
//     slideIndex === 0 ? indicatorClass = 'active' : ''
//     var dataTarget = '#' + carouselId
//     return(
//         <li data-target={dataTarget} data-slide-to={slideIndex} className={indicatorClass} />
//     )
//   }
// })

const BSCarouselIndicators = ({
    carouselId,
    active,
    slides
}) => {
    if(active){
      var indicatorNodes = slides.map( function(slide, index){
        return(
          <BSCarouselIndicator key={index} index={index} carouselId={carouselId} />
        )
      })
      return(
        <ol className="carousel-indicators">
          {indicatorNodes}
        </ol>
      )
    } else {
      return false
    }
}

// var BSCarouselIndicators = React.createClass({
//   render: function(){
//     var carouselId = this.props.carouselId
//     var active = this.props.active
//     var slides = this.props.slides

//     if(active){
//       var indicatorNodes = slides.map( function(slide, index){
//         return(
//           <BSCarouselIndicator key={index} index={index} carouselId={carouselId} />
//         )
//       })
//       return(
//         <ol className="carousel-indicators">
//           {indicatorNodes}
//         </ol>
//       )
//     } else {
//       return false
//     }
//   }
// })

const BSCarouselControls = ({
    carouselId,
    active
}) => {
    var href = '#' + carouselId
    if(active){
      return(
        <div>
          <a className="left carousel-control" href={href} role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href={href} role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      )      
    } else {
      return false
    }
}

// var BSCarouselControls = React.createClass({
//   render: function(){
//     var carouselId = this.props.carouselId
//     var href = '#' + carouselId
//     var active = this.props.active
//     if(active){
//       return(
//         <div>
//           <a className="left carousel-control" href={href} role="button" data-slide="prev">
//             <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
//             <span className="sr-only">Previous</span>
//           </a>
//           <a className="right carousel-control" href={href} role="button" data-slide="next">
//             <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
//             <span className="sr-only">Next</span>
//           </a>
//         </div>
//       )      
//     } else {
//       return false
//     }
//   }
// })

const BSCarouselSlide = ({
    slide,
    index
}) => {
    var slideClass
    index === 0 ? slideClass = 'item active' : slideClass = 'item'
    return(
      <div className={slideClass}>
        <img src={slide.image} alt={slide.alt} />
        <div className="carousel-caption">
          {slide.caption}
        </div>
      </div>
    )    
}

// var BSCarouselSlide = React.createClass({
//   render: function(){
//     var slide = this.props.slide
//     console.log('index ', this.props.index)
//     var slideClass
//     this.props.index === 0 ? slideClass = 'item active' : slideClass = 'item'
//     return(
//       <div className={slideClass}>
//         <img src={slide.image} alt={slide.alt} />
//         <div className="carousel-caption">
//           {slide.caption}
//         </div>
//       </div>
//     )
//   }
// })

const BSCarousel = ({
    data
}) => {
    var slides = data.slides.map( function(slide, index){
      return(
        <BSCarouselSlide key={index} index={index} slide={slide} />
      )
    })

    return(
      <div id={data.id} className="carousel slide" data-ride="carousel">

        <BSCarouselIndicators carouselId={data.id} slides={data.slides} active={data.indicators} />

        <div className="carousel-inner" role="listbox">
          { slides }
        </div>

        <BSCarouselControls carouselId={data.id} active={data.controls} />

      </div>
    )    
}

// var BSCarousel = React.createClass({
//   render: function(){
//     var schema = this.props.schema

//     var slides = schema.slides.map( function(slide, index){
//       return(
//         <BSCarouselSlide key={index} index={index} slide={slide} />
//       )
//     })

//     return(
//       <div id={schema.id} className="carousel slide" data-ride="carousel">

//         <BSCarouselIndicators carouselId={schema.id} slides={schema.slides} active={schema.indicators} />

//         <div className="carousel-inner" role="listbox">
//           { slides }
//         </div>

//         <BSCarouselControls carouselId={schema.id} active={schema.controls} />

//       </div>
//     )
//   }
// })

var bs_carousel = {
  type: 'BSCarousel',
  component: BSCarousel,
  data: {
    id: 'carousel_example_generic',
    indicators:  true,
    controls: true,
    slides: [
      {
        image: 'img/slide1.jpg',
        caption: 'Slide 1',
        alt: 'slide'
      },
      {
        image: 'img/slide2.jpg',
        caption: 'Slide 2',
        alt: 'slide 2'
      },
      {
        image: 'img/slide3.jpg',
        caption: 'Slide 3',
        alt: 'slide 3'
      }
    ]
  }
}

export default bs_carousel
