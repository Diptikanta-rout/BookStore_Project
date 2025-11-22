import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";

const EditBooks = () => {
    const {id} = useParams();
    const {bookTitle, authorName, imageURL, category, bookDescription, bookPdfUrl} = useLoaderData()

    const bookCategories = [
        "Fiction",
        "Non-Fiction",
        "Mistery",
        "Programming",
        "Science Fiction",
        "Fantasy",
        "Horror",
        "Autobiography",
        "History",
        "Business",
        "Children Books", 
        "Travel",
        "Religion",
        "Art and Design"
    ]
    const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

    const handleChangeSelectedValue = (event) => {
        console.log(event.target.value);
        setSelectedBookCategory(event.target.value)
    }

    // handle book submission
    const  handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;

        const bookTitle = form.bookTitle.value;
        const authorName = form.authorName.value;
        const imageURL = form.imageURL.value;
        const category = form.categoryName.value;
        const bookDescription = form.bookDescription.value;
        const bookPdfUrl = form.bookPdfUrl.value;

        const updateBookObj = {
            bookTitle,authorName,imageURL,category,bookDescription,bookPdfUrl
        }

        // update book data
        fetch(`http://localhost:5000/book/${id}`, {
            method:"PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateBookObj)
        }).then(res => res.json()).then(data => {
            alert("Book is Update Successfully")
            // form.reset();
        })
       
    }
    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>Update the book data</h2>

            <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4 ">
                {/* 1st row */}
                <div className='flex gap-8'>
                    <div className="lg:w-1/2">
                        <div className="mb-2 block">Book Tittle
                        <Label htmlFor="bookTitle" value="" />
                        </div>
                        <TextInput id="bookTitle" 
                        name="bookTitle"
                        type="text" placeholder="Book name" required 
                        defaultValue={bookTitle}
                        />
                    </div> 

                    {/* authorname */}
                    <div className="lg:w-1/2">
                        <div className="mb-2 block">Author Name 
                           <Label htmlFor="authorName" value="authorName" />
                        </div>
                        <TextInput id="authorName" 
                        name="authorName"
                        type="text" placeholder="Author Name" required 
                        defaultValue={authorName}
                        />
                    </div> 
                </div>

                {/* 2nd row */}
                <div className='flex gap-8'>
                    <div className="lg:w-1/2">
                        <div className="mb-2 block">Book image URL
                        <Label htmlFor="imageURL" value="" />
                        </div>
                        <TextInput id="imageURL" 
                        name="imageURL"
                        type="text" placeholder="Book image URL" required
                        defaultValue={imageURL} 
                        />
                    </div> 

                    {/* category */}
                    <div className="lg:w-1/2">
                        <div className="mb-2 block">Book Category
                           <Label htmlFor="inputState" value="" />
                        </div>
                        <Select id="inputState" name="categoryName" className='w-full rounded' value={selectedBookCategory}
                        onChange={handleChangeSelectedValue}>
                            {
                                bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
                            }
                        </Select>
                    </div> 
                </div>

                {/* bookDescription */}
                <div>
                    <div className="mb-2 block">Book Descriptions
                        <Label htmlFor="bookDescription" value=""  />
                    </div>
                    <Textarea id="bookDescription" name="bookDescription" 
                    placeholder="write your book description..." required className='w-full' rows={4}
                    defaultValue={bookDescription} 
                    />
                </div>

                {/* book pdf link */}
                <div>
                    <div className="mb-2 block">Book PDF URL
                      <Label htmlFor="bookPdfUrl" value="" />
                    </div>
                    <TextInput id="bookPdfUrl" type="text" placeholder="book Pdf Url" required 
                    defaultValue={bookPdfUrl}
                    />
                </div>

                <Button type="submit" className='mt-10'>Update Book</Button>
            </form>
        </div>
    )
}

export default EditBooks