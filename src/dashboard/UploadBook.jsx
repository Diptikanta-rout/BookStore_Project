import React, { useState } from "react";
import { Button, Label, Select, Textarea, TextInput } from "flowbite-react";

const UploadBook = () => {
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
    const  handleBookSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const bookTitle = form.bookTitle.value;
        const authorName = form.authorName.value;
        const imageURL = form.imageURL.value;
        const category = form.categoryName.value;
        const bookDescription = form.bookDescription.value;
        const bookPdfUrl = form.bookPdfUrl.value;

        const bookObj = {
            bookTitle,authorName,imageURL,category,bookDescription,bookPdfUrl
        }
        console.log(bookObj);

        // send data to database
        fetch("http://localhost:5000/upload-book", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(bookObj)
        }).then(res => res.json()).then(data => {
            alert("Book Upload Successfully")
            form.reset();
        })
    }
    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>

            <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4 ">
                {/* 1st row */}
                <div className='flex gap-8'>
                    <div className="lg:w-1/2">
                        <div className="mb-2 block">Book Tittle
                        <Label htmlFor="bookTitle" value="" />
                        </div>
                        <TextInput id="bookTitle" 
                        name="bookTitle"
                        type="text" placeholder="Book name" required 
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
                    placeholder="write your book description..." required className='w-full' rows={4} />
                </div>

                {/* book pdf link */}
                <div>
                    <div className="mb-2 block">Book PDF URL
                      <Label htmlFor="bookPdfUrl" value="" />
                    </div>
                    <TextInput id="bookPdfUrl" type="text" placeholder="book Pdf Url" required />
                </div>

                <Button type="submit" className='mt-10'>Upload Book</Button>
            </form>
        </div>
    )
}

export default UploadBook



