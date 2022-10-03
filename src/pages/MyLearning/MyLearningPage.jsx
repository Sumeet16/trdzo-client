import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./MyLearning.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MyLearning = () => {
    const [user, setUser] = useState([]);
    const [courses, setCourse] = useState([]);
    const navigate = useNavigate();


    const getCourse = async (elem) => {
        const id = elem
        const response = await axios.post("https://trdzo.herokuapp.com/getCourseById", {
            id
        })
        setCourse(courses => [...courses, response.data.course])
    }

    const intiateCourseFetch = async () => {
        const myLearningArray = localStorage.getItem("userData").split(",")
        console.log(myLearningArray);
        myLearningArray.forEach((elem) => {
            getCourse(elem)
        })
    }

    const getUser = async () => {
        const userId = localStorage.getItem("userId")

        const response = await axios.post("https://trdzo.herokuapp.com/getUser", {
            userId
        })
        setUser(response.data.user);
    }

    useEffect(() => {
        const access = localStorage.getItem("token");
        if (!access) {
            navigate("/loguser", { replace: true })
        }
        getUser()
        intiateCourseFetch()
    }, [])

    return (
        <>
            <Header color="black" />
            <div className="MyLearning_container">
                <div class="row">
                    {
                        courses.map((elem, index) => {
                            return (
                                <div className="course_card" key={index}>
                                    <img src={elem.courseImage} className="image image_card" alt="image" />
                                    <h2>{elem.title}</h2>
                                    <a className="button" onClick={() => {
                                        navigate(`/mycourse?id=${elem._id}`, { replace: true }); window.scrollTo({
                                            top: 0,
                                            behavior: 'smooth'
                                        });
                                    }}>Go To Course</a>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
            <Footer />
        </>
    )
}

export default MyLearning