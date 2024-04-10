import "./Header.css";

const Header = ({heading}) => {
    return (
        <section className="header">
            <h1>{heading}</h1>
            <p>SpaceX believes a fully and rapidly reusable rocket
                is the pivotal breakthrough needed to substantially reduce
                the cost of space access. The majority of the launch cost
                comes from building the rocket, which historically has flown only once.
                 Compare that to a commercial airliner-each new plane costs about
                the same as Falcon 9 but can fly multiple times per day and conduct
                tens of thousands of flights over its lifetime.</p>
            <p> Following the commercial model, a rapidly reusable space launch vehicle could
                reduce the cost of traveling to space by a hundredfold.</p>
        </section>
    );
};   

export default Header