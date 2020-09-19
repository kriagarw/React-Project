import React from 'react'

const defaultProps = {
    imageUrl: 'https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/cert_entrepreneurship__1580810993200.png',
    imageAlt: 'Data Analysis',
    title: 'Data Analysis',
    date: 'Aug 30, 2020',
    personName: 'xyz'
}

export default function InfoCard(props) {
    let eventData = defaultProps;
    return (

        <div className="wrapper">
            <div className="eventHeading">card</div>
            <div className="event"></div>
            <div className="events -mt-2"></div>
            <div className="flex w-5/6 mr-auto ml-auto mt-10 justify-center">


                <div className="eventCard">

                    <div className="relative w-full h-32">
                        <img className="rounded-lg" src={eventData.imageUrl} alt="github" />
                    </div>

                    <div className="evtName">
                        <div className="align-middle flex">
                            <div className="online">
                                <span className="text-xs capitalize">online</span>
                            </div>
                            <div className="location">{props.location}</div>
                        </div>
                        <div className="evtTitle">{eventData.title}</div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 mt-1 w-5 h-6">
                                <path fill="black" d="M8.428 0H.578a.577.577 0 00-.575.573v1.415c0 .317.265.577.575.577h.23v1.083c0 .452.2.872.548 1.155L4.068 7 1.404 9.09c-.361.282-.57.71-.57 1.169v1.176H.575a.58.58 0 00-.575.577v1.415A.58.58 0 00.575 14h7.847a.577.577 0 00.575-.573v-1.415a.582.582 0 00-.575-.577h-.194v-1.173c0-.459-.214-.9-.575-1.177L4.938 6.994 7.647 4.8c.349-.28.548-.703.548-1.155v-1.08h.23A.58.58 0 009 1.988V.573A.575.575 0 008.428 0zm-.021 11.978c.018 0 .03.013.03.03v1.419c0 .018-.012.03-.03.03H.569c-.018 0-.03-.012-.03-.03v-1.418c0-.018.012-.03.03-.03h7.838zM7.328 9.516c.23.175.364.453.364.746v1.173H1.374v-1.18a.95.95 0 01.36-.739l2.769-2.172 2.825 2.172zm.334-5.868a.934.934 0 01-.349.73l-2.81 2.275-2.81-2.275a.934.934 0 01-.349-.73V2.565h6.318v1.083zm.775-1.657c0 .018-.012.03-.03.03H.569c-.018 0-.03-.012-.03-.03V.573c0-.018.012-.03.03-.03h7.838c.018 0 .03.012.03.03v1.418z">
                                </path>
                            </svg>
                            <div className="evtTime">24 months</div>
                        </div>
                        <div className="align-middle flex">
                            <svg fill="black" xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5">
                                <path d="M14.125 1.25h-.75V0h-1.25v1.25h-8.25V0h-1.25v1.25h-.75A1.877 1.877 0 000 3.125v11C0 15.159.841 16 1.875 16h12.25A1.877 1.877 0 0016 14.125v-11a1.877 1.877 0 00-1.875-1.875zM1.875 2.5h.75v1.25h1.25V2.5h8.25v1.25h1.25V2.5h.75c.345 0 .625.28.625.625v1.5H1.25v-1.5c0-.345.28-.625.625-.625zm12.25 12.25H1.875a.626.626 0 01-.625-.625v-8.25h13.5v8.25c0 .345-.28.625-.625.625zm-4.25-1.313h3.75v-3.75h-3.75v3.75zm1.25-2.5h1.25v1.25h-1.25v-1.25z" fill="black" stroke="#fff" strokeWidth=".5">
                                </path>
                            </svg>
                            <div className="flex cursor-pointer">
                                <span className="text-sm text-gray-800 mr-2">Date:</span>
                                <div className="evtDate">{eventData.date}</div>
                            </div>
                        </div>
                    </div>

                    <div className="evtDetail">
                        <p>Be a business leader of tomorrow</p>
                        <p> and advance your career with Global</p>
                        <p className="truncate"> nu jhguf jvuf kufys ghdtrereq cdhub csyd sgxv sbxhsb xuhw .</p>
                    </div>

                    <div className=" relative flex p-4 pt-0 ">
                        <div className="ml-3">
                            <div className="speakerHead">speakers :</div>
                            <img className="photo" src="/speaker1.jpeg" />
                        </div>

                        <div className="moreIcon">
                            <div className="viewMore">view more</div>
                            <svg fill="teal" xmlns="http://www.w3.org/2000/svg" className=" w-6 h-10 stroke-1">
                                <path fillRule="evenodd" clipRule="evenodd" d="M16 7a.557.557 0 01-.166.39l-5.603 5.449a.577.577 0 01-.8 0 .54.54 0 010-.779l4.637-4.51H1.566A.558.558 0 011 7c0-.304.254-.55.566-.55h12.502L9.43 1.94a.54.54 0 010-.779.578.578 0 01.8 0l5.603 5.45A.553.553 0 0116 7z"
                                    strokeWidth=".5" strokeLinecap="round">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

// <div className="relative h-2">
// <div className="flex text-center">
//     <div className="mr-2">
//         <p className="online flex">
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6">
//                 <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083
//                   9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 
//                   1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 
//                   4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 
//                   1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-
//                   .623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783
//                    4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
//             </svg>
//             <span> Online</span>
//         </p>
//     </div>
// </div>
// </div>
// <img className="img h-32 pt-4" src={props.imageUrl} alt={props.imageAlt} />
//             <div className="p-3 font-semibold text-2xl relative table table-fixed h-24">
//                 <div className="table-cell">
//                     <h3 className="inline-block mb-1 text-left">{props.title}</h3>
//                     <div className="inline-block w-full p-1 m-0 text-sm text-gray-800 text-left">{props.date}</div>
//                 </div>
//             </div>

//             <div className="relative h-16">
//                 <div className="flex h-16 italic text-base">
//                     <div>
//                         <p>Speakers:</p>
//                         <div className="flex pt-1">
//                             <div className="mr-2  cursor-pointer" data-name={props.personName} data-job-title="" data-original-title="" title="">
//                                 <div className="photo">
//                                     <img src="/speaker1.jpeg" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
            // </div>