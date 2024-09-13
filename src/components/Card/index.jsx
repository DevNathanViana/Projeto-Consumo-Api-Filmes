/* eslint-disable react/prop-types */

import { Container } from "./styles"
import MovieIcon from '../../assets/movie-icon.svg'
import AwardIcon from '../../assets/award-icon.svg'

function Card({ movieData }) {


    return (
        <Container>
            <div className="wrapper-image-logo">
                <img src={MovieIcon} alt="icone filme" />
            </div>

            <div className="container-items">
                <div className="wrapper-items">
                    <h3>{movieData.name}</h3>
                    <p>{movieData.runtineinminutes}</p>
                </div>
                <div className="wrapper-award">
                    <img src={AwardIcon} alt="award logo" />
                    <p>{movieData.academyAwardWins} Wins & {movieData.academyAwardNominations} Nominations</p>
                </div>

                <div className="wrapper-budget">
                    <div>
                        <h4>Budget</h4>
                        <p>{movieData.budgetInMillions}M</p>
                    </div>
                    <div>
                        <h4>Revenue</h4>
                        <p>{movieData.boxOfficeRevenueInMillions}M</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Card