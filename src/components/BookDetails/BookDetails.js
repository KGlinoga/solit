import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookDetails.css";
import {FaArrowLeft} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import AddReview from './Page';
import BookRatings from './BookRatings';
import UserReviews from './UserReviews';
import Form from './Form';


const URL = "https://openlibrary.org/works/";

const BookDetails = (props) => {
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();
  // console.log({id});
  useEffect(() => {
    setLoading(true);
    async function getBookDetails(){
      try{
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();

        if(data){
          const { description, title, covers } = data;
          const newBook = {
            description: description ? description.value : "No description found",
            title: title,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch(error){
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);

  if(loading) return <Loading />;
// section for showing up
//   if(AddReview){
//     navigate(`/review-from-token`)
//   }
// },[AddReview]

return (
  <div className="Login">
      {/* <AuthForm type="Login" handleSubmit = {props.handleLogin}/>
      <AuthForm type="Signup" handleSubmit = {props.handleSignup}/> */}
    <section className='book-details'>
      <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/book")}>
          <FaArrowLeft size = {22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>

        <div className='book-details-content grid'>
          <div className='book-details-img'>
            <img src = {book?.cover_img} alt = "cover img" />
          </div>
          <div className='book-details-info'>
            <div className='book-details-item title'>
              <span className='fw-6 fs-24'>{book?.title}</span>
            </div>
            <div className='book-details-item description'>
              <span>{book?.description}</span>
            </div>
            <div id="BookRatings">
                <BookRatings/>
            </div>
            <div id="userReviews">
                <UserReviews/>
            </div>
            <div className="addReviewbtn">
              <AddReview />
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
)}

export default BookDetails;