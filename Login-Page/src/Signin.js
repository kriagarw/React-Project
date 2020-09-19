import React from 'react'

function Signin() {
    return (
        <div class="container">

            <form>

                <div class="group">
                    <input type="text" required />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Name</label>
                </div>

                <div class="group">
                    <input type="text" required />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Email</label>
                </div>

            </form>

        </div>
    )
}

export default Signin


