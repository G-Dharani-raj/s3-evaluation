import Image from 'next/image'
import { useRouter } from 'next/router';
import React from 'react'
// ? resume link : https://rxresu.me/gdharaniraj0/dharani-raj-resume
const Details = () => {
    const router = useRouter();
    const handleRouting = (): void => {
        router.push("https://rxresu.me/gdharaniraj0/dharani-raj-resume")
    }
    return (
        <div>
            <Image src="https://avatars.githubusercontent.com/u/105777295?v=4" alt= "user-image" width="200" height="200" />
            <h3>Dharani Raj</h3>
            <p>@G-Dharani-raj</p>
            <button onClick={handleRouting}>Resume</button>
            <div>
                <h3>Full Stack web dev</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                </ul>
                {/* change */}
            </div>
            <div>
                <h3>Education</h3>
                <div>
                    <h3>Full stack web dev</h3>
                    <li>Masai School</li>
                </div>
                <div>
                    <h3>B.Sc, E.C.E (discountinued) </h3>
                    <li>Amrita University</li>
                </div>
                <div>
                    <h3>Intermediate - 8.5</h3>
                    <li>Sri Chaitnya Jr. College</li>
                </div>

            </div>
        </div>
  )
}

export default Details