export function Faq(){

    const faqsList = [
        {
            q: "What are some random questions to ask?",
            a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question."
        },
        {
            q: "Do you include common questions?",
            a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator."
        },
        {
            q: "Can I use this for 21 questions?",
            a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated."
        },
        {
            q: "Are these questions for girls or for boys?",
            a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with)."
        },
        {
            q: "What do you wish you had more talent doing?",
            a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires."
        }
    ]

    return(
        <>
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-center text-white md:px-8">
                <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl drop-shadow-lg text-white font-extrabold mx-auto md:text-5xl mb-4">
                Perguntas e respostas que    
            </h1>
            <span className="before:block before:rounded-xl before:absolute before:-inset-1 before:-skew-y-0 p-2 text-2xl drop-shadow-lg text-gray-300 font-extrabold mx-auto md:text-4xl before:bg-gradient-to-r from-rose-700 to-rose-950 relative inline-block">
        <span className="relative text-white">as mães, mais perguntam</span>
        </span>
        </div>
    <div className="mt-14 max-w-2xl mx-auto">
    <details className="mt-2 bg-rose-950 rounded-xl ring-1 ring-slate-900/5 shadow-lg hover:bg-rose-950/30 hover:transition-all hover:ease-out hover:duration-300 hover:ring-2 hover:ring-white open:ring-1 open:ring-black/5 open:shadow-lg p-2" open>
    <summary className="text-xl text-white font-semibold select-none">
      Pesgunta 1
    </summary>
    <div className="mt-3 text-lg text-white">
      <p>Pesgunta 1</p>
    </div>
  </details>
  <details className="mt-2 bg-rose-950 rounded-xl ring-1 ring-slate-900/5 shadow-lg hover:bg-rose-950/30 hover:transition-all hover:ease-out hover:duration-300 hover:ring-2 hover:ring-white open:ring-1 open:ring-black/5 open:shadow-lg p-2" open>
    <summary className="text-xl text-white font-semibold select-none">
      Pesgunta 2
    </summary>
    <div className="mt-3 text-lg text-white">
      <p>Pesgunta 2</p>
    </div>
  </details>
  <details className="mt-2 bg-rose-950 rounded-xl ring-1 ring-slate-900/5 shadow-lg hover:bg-rose-950/30 hover:transition-all hover:ease-out hover:duration-300 hover:ring-2 hover:ring-white open:ring-1 open:ring-black/5 open:shadow-lg p-2" open>
    <summary className="text-xl text-white font-semibold select-none">
      Pesgunta 3
    </summary>
    <div className="mt-3 text-lg text-white">
      <p>Pesgunta 3</p>
    </div>
  </details>
  <details className="mt-2 bg-rose-950 rounded-xl ring-1 ring-slate-900/5 shadow-lg hover:bg-rose-950/30 hover:transition-all hover:ease-out hover:duration-300 hover:ring-2 hover:ring-white open:ring-1 open:ring-black/5 open:shadow-lg p-2" open>
    <summary className="text-xl text-white font-semibold select-none">
      Pesgunta 4
    </summary>
    <div className="mt-3 text-lg text-white">
      <p>Pesgunta 4</p>
    </div>
  </details>
  <details className="mt-2 bg-rose-950 rounded-xl ring-1 ring-slate-900/5 shadow-lg hover:bg-rose-950/30 hover:transition-all hover:ease-out hover:duration-300 hover:ring-2 hover:ring-white open:ring-1 open:ring-black/5 open:shadow-lg p-2" open>
    <summary className="text-xl text-white font-semibold select-none">
      Pesgunta 5
    </summary>
    <div className="mt-3 text-lg text-white">
      <p>Pesgunta 5</p>
    </div>
  </details>
</div>
        {/* <div tabIndex={1} className="collapse collapse-arrow bg-rose-950 rounded-xl ring-1 ring-slate-900/5 shadow-lg hover:bg-rose-950/30 hover:transition-all hover:ease-out hover:duration-300 hover:ring-2 hover:ring-white">
        <input type="checkbox"/>
        <div className="collapse-title text-xl text-white font-bold">
            Pesguntas 1
            </div>
            <div className="collapse-content">
                <p className="text-white text-lg">Testando</p>
                </div>
            </div> */}
        </div>
</section>
        </>
    )
}