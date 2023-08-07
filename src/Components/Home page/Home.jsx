import React,{useState} from 'react';
import './Home.scss'

const Home = () => {

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageList, setImageList] = useState([]);



  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleImageUpload = () => {
    if (selectedImage) {
      const newImage = URL.createObjectURL(selectedImage);
      setImageList([...imageList, newImage]);
      setSelectedImage(null);
    }
  };

  const handleDeleteImage = (index) => {
    const newList = [...imageList];
    newList.splice(index, 1);
    setImageList(newList);
  };



  // our services 
  
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [contentList, setContentList] = useState([]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleParaChange = (event) => {
    setParagraph(event.target.value);
  };

  const handleAddContent = () => {
    if (title && paragraph) {
      const newContent = {
        title: title,
        paragraph: paragraph,
      };
      setContentList([...contentList, newContent]);
      setTitle("");
      setParagraph("");
    }
  };

  const handleEditContent = (index) => {
    const editedContent = contentList[index];
    setTitle(editedContent.title);
    setParagraph(editedContent.paragraph);
    handleDeleteContent(index);
  };

  const handleDeleteContent = (index) => {
    const newList = [...contentList];
    newList.splice(index, 1);
    setContentList(newList);
  };

  return (
    <>
    <div className='homeConatiner'>

    <h1>Home</h1>

    <div className="uploadingSection">
      <h2>Slider</h2>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Upload Image</button>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {imageList.map((image, index) => (
            <tr key={index}>
              <td>
                <img src={image} alt={`Image ${index}`} width="100" height="100" />
              </td>
              <td>
                <button onClick={() => handleDeleteImage(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="ourservies">
      <h1>Our Services</h1>
      <div>

            <div className='ourServiesCard'>

            <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />
        <label htmlFor="paragraph">Paragraph:</label>
        <input
          type="text"
          id="paragraph"
          value={paragraph}
          onChange={handleParaChange}
        />
        <button onClick={handleAddContent}>Add Content</button>
            </div>


      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Paragraph</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contentList.map((content, index) => (
            <tr key={index}>
              <td>{content.title}</td>
              <td>{content.paragraph}</td>
              <td>
                <button onClick={() => handleEditContent(index)}>Edit</button>
                <button onClick={() => handleDeleteContent(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  
    </div>
   
    
    
    </>
  )
}

export default Home



