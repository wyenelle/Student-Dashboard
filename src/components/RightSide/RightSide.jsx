import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'



const RightSide = () => {
  const slides = [
    {title : 'first item',desc : 'lorem'},
    {title : 'second item',desc : 'lorem ipsum'},
    {title : 'third item',desc : 'lorem ipsum'}
  ]
  return (
      <Slider autoplay={3000}>
        {
          slides.map((slide,idx) => (
            <div className='border border-black' key={idx}>
              <h2>{slide.title}</h2>
              <p>{slide.desc}</p>
            </div>
          ))
        }
      </Slider>
  )
}

export default RightSide