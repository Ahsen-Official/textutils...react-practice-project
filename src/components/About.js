import React from 'react'

export default function About(props) {
    return (
        <div className={`container p-4 rounded my-5 bg-${props.mode === 'dark' ? 'secondary' : 'light'} text-${props.mode === 'dark' ? 'white' : 'black'}`} >
            <h1 className="p-0 mb-2">About</h1>
            <div class="accordion" id="accordionExample">
                <div class={`accordion-item bg-${props.mode === 'dark' ? 'secondary' : 'light'} text-${props.mode === 'dark' ? 'white' : 'black'}`}>
                    <h2 class="accordion-header">
                        <button class={`accordion-button bg-${props.mode === 'dark' ? 'secondary' : 'light'} text-${props.mode === 'dark' ? 'white' : 'black'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div class={`accordion-item bg-${props.mode === 'dark' ? 'secondary' : 'light'} text-${props.mode === 'dark' ? 'white' : 'black'}`}>
                    <h2 class="accordion-header">
                        <button class={`accordion-button collapsed bg-${props.mode === 'dark' ? 'secondary' : 'light'} text-${props.mode === 'dark' ? 'white' : 'black'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div class={`accordion-item bg-${props.mode === 'dark' ? 'secondary' : 'light'} text-${props.mode === 'dark' ? 'white' : 'black'}`}>
                    <h2 class="accordion-header">
                        <button class={`accordion-button collapsed bg-${props.mode === 'dark' ? 'secondary' : 'light'} text-${props.mode === 'dark' ? 'white' : 'black'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
