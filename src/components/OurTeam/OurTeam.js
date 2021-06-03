import React from 'react'
import Member from '../Member/Member'

const OurTeam = () => {
    return (
        <main>
            <section id="member1">
                <Member src={"https://avatars.githubusercontent.com/u/43658933"} name={"Rafael"} bio={"Bio"}/>
            </section>

            <section id="member2">
                <Member src={"https://avatars.githubusercontent.com/u/43658933"} name={"Rafael"} bio={"Bio"}/>
            </section>

            <section id="member3">
                <Member src={"https://avatars.githubusercontent.com/u/43658933"} name={"Rafael"} bio={"Bio"}/>
            </section>
        </main>
    )
}

export default OurTeam
