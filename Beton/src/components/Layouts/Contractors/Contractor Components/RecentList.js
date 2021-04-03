import React, { useState, useEffect } from 'react'

export default function RecentList() {

    return (
        <>
            <div class="courses-container">
                <div class="course">
                    <div class="course-preview">
                        <h6>Course</h6>
                        <h2>JavaScript Fundamentals</h2>
                        <a href="#">View all chapters <i class="fas fa-chevron-right"></i></a>
                    </div>
                    <div class="course-info">
                        <div class="progress-container">
                            <div class="progress"></div>
                            <span class="progress-text">
                                6/9 Challenges
				    </span>
                        </div>
                        <h6>Chapter 4</h6>
                        <h2>Callbacks & Closures</h2>
                        <button class="bttn">Continue</button>
                    </div>
                </div>
            </div>
        </>
    )
}
