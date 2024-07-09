import "./faq-section.css"

function FaqSection(){
    return(
        <div className="faq" id="faq">
        <img src="image/background-faqs.jpg" alt="" />
        <div className="faq__container">
            <h1 className="title">Frequently asked questions</h1>
            <p className="sub__title">If you can’t find what you’re looking for, email our support team and if you’re lucky someone will get back to you.</p>
            <div className="faq__wrapper">
                <div className="faq__card">
                <div>
                        <h1>Does TaxPal handle VAT?</h1>
                        <p>Well no, but if you move your company offshore you can probably ignore it.</p>
                </div>
                <div>
                        <h1>Can I pay for my subscription via purchase order?</h1>
                        <p>Absolutely, we are happy to take your money in all forms.</p>
                </div>
                <div>
                        <h1>How do I apply for a job at TaxPal? </h1>
                        <p>We only hire our customers, so subscribe for a minimum of 6 months and then let’s talk.</p>
                </div>
                </div>
                <div className="faq__card">
                <div>
                        <h1>What was that testimonial about tax fraud all about?</h1>
                        <p>TaxPal is just a software application, ultimately your books are your responsibility.</p>
                </div>
                <div>
                        <h1>TaxPal sounds horrible but why do I still feel compelled to purchase?</h1>
                        <p>This is the power of excellent visual design. You just can’t resist it, no matter how poorly it actually functions.</p>
                </div>
                <div>
                        <h1>I found other companies called TaxPal, are you sure you can use this name? </h1>
                        <p>Honestly not sure at all. We haven’t actually incorporated or anything, we just thought it sounded cool and made this website.</p>
                </div>
                </div>
                <div className="faq__card">
                <div>
                        <h1>How do you generate reports?</h1>            
                        <p>You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.</p>
                </div>
                <div>
                        <h1>Can we expect more inventory features?</h1>
                        <p>In life it’s really better to never expect anything at all.</p>                   
                </div>
                <div>
                        <h1>I lost my password, how do I get into my account?</h1>
                        <p>Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.</p>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default FaqSection;