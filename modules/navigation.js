export function Navigation(){
    return (
        <div className="banner">
            <div className="navbar">
                <a href="/"><img src="/rwi-logo.png" alt="Home" /></a>
                <ul>
                    <li><a href="/about">About</a></li>
                    <li><a href="/plus">Plus</a></li>
                </ul>
            </div>
        </div>
    )
}

export function Footer(){
    return (
        <footer>
            <div className="footer">
                <p><a href="/terms-of-service">Terms of Service</a> | <a href="/privacy-policy">Privacy Policy</a> | <a href="mailto:support@rowhois.com">Support</a></p>
            </div>
        </footer>
    )
}