import React, { useState } from 'react';
import NavBar from './NavBar';


const ReviewForm = ({ onSubmit, movieList }) => {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);
  
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, comment, rating, selectedMovie);
        onSubmit({ name, comment, rating, selectedMovie });
        setSelectedMovie(null);
        setName('');
        setComment('');
        setRating(0);
      };
    
      const handleRatingChange = (newRating) => {
          setRating(newRating);
        };
      
        return (
            <main className="reviewform">
              <NavBar />
        
              <h2>Write a Review</h2>
              <form onSubmit={handleSubmit}>
        
                <div className="formitem name">
                  <label>Name:</label><br></br>
                  <input placeholder="username" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
        
                <div className="formitem comment">
                  <label>Comment:</label><br></br>
                  <textarea placeholder="Write your review here." value={comment} onChange={(e) => setComment(e.target.value)} required />
                </div>
        
                <div className="formitem moviedropdown">
                  <label>Select a Movie:</label><br></br>
                  <select value={selectedMovie} onChange={(e) => setSelectedMovie(e.target.value)}>
                    <option value="">Select a movie</option>
                    {movieList.map((movie, index) => (
                        <option key={index} value={movie.title}>
                          {movie.title}
                        </option>
                      ))};
                    </select>
                  </div>
          
                  <div className="formitem starrating">
                    <label>Rating:</label>
                    <div className="star-rating">
                      {[1, 2, 3, 4, 5].map((value) => (
                          <span
                            key={value}
                            className={`star ${value <= rating ? 'selected' : ''}`}
                            onClick={() => handleRatingChange(value)}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
            
                    <button type="submit">Submit Review</button>
            
                  </form>
                </main>
              );
            };
            
            export default ReviewForm;












            
                        // import React, { useState } from 'react';
                        // import { useHistory } from 'react-router-dom';
                        // import NavBar from './NavBar';
                        
                        // function ReviewForm() {
                        //   const history = useHistory();
                        
                        //   const [name, setName] = useState('');
                        //   const [comment, setComment] = useState('');
                        //   const [selectedMovie, setSelectedMovie] = useState('');
                        //   const [rating, setRating] = useState(0);
                        
                        //   const movieList = [...]; // Define your movie list here
                        
                        //   const handleSubmit = async (e) => {
                        //     e.preventDefault();
                        
                        //     const formData = {
                        //       name: name,
                        //       comment: comment,
                        //       selectedMovie: selectedMovie,
                        //       rating: rating
                        //     };
                        
                        //     try {
                        //       const response = await fetch('http://localhost:4000/submit', {
                        //         // Use the backend URL with port 4000
                        //         method: 'POST',
                        //         headers: {
                        //           'Content-Type': 'application/json'
                        //         },
                        //         body: JSON.stringify(formData)
                        //       });
                        
                        //       if (response.ok) {
                        //         // Handle successful submission, maybe redirect or show a success message
                        //         history.push('/success-route'); // Replace with your desired route
                        //       } else {
                        //         // Handle error response
                        //         console.error('Error submitting the form');
                        //       }
                        //     } catch (error) {
                        //       console.error('Error submitting the form', error);
                        //     }
                        //   };
                        
                        //   return (
                        //     <main className="reviewform">
                        //       <NavBar />
                        
                        //       <h2>Write a Review</h2>
                        //       <form onSubmit={handleSubmit}>
                        //         {/* ... Form input elements ... */}
                        //       </form>
                        //     </main>
                        //   );
                        // }
                        
                        // export default ReviewForm;


