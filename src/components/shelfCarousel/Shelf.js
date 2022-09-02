import React from 'react'
import Carousel from 'better-react-carousel'

const Shelf = () => {
  return (
    <Carousel cols={2} rows={1} gap={10} loop>
      <Carousel.Item>
        <img width="100%" alt="" src="https://images-na.ssl-images-amazon.com/images/I/81MI6+TpYkL.jpghotos/800/600?random=1" />
        <Carousel.Caption>
          <h3 id='bookTitle'>One Hundred Years of Solitude</h3>
          <p id='bookAuthor'>Gabriel García Márquez</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" alt="" src="https://images-na.ssl-images-amazon.com/images/I/81S-NIf8yrL.jpg" />
        <Carousel.Caption>
          <h3 id='bookTitle'>The Passion According to G.H.</h3>
          <p id='bookAuthor'>Clarice Lispector</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%"alt=""  src="http://prodimage.images-bn.com/pimages/9780060837020_p0_v1_s1200x630.jpg" />
        <Carousel.Caption>
          <h3 id='bookTitle'>The Bell Jar</h3>
          <p id='bookAuthor'>Sylvia Plath</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" alt="" src="http://prodimage.https://images-na.ssl-images-amazon.com/images/I/71BheRVw5ZL.jpg" />
        <Carousel.Caption>
          <h3 id='bookTitle'>Black Swans</h3>
          <p id='bookAuthor'>Eve Babitz</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Shelf;