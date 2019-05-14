import React, { Component } from "react";
import '../tech-preview/tech-preview.style.css';
import TechCard from './tech-card/tech-card.component'; 

class TechPreview extends Component {
    render() {
        return (
            <section className="techPreviewSection">
                <ul class="tech-container">
                    <li class="tech-item"><TechCard /></li>
                    <li class="tech-item">2</li>
                    <li class="tech-item">3</li>
                    <li class="tech-item">4</li>
                    <li class="tech-item">5</li>
                    <li class="tech-item">6</li>
                </ul>
            </section>
        )
    }
}

export default TechPreview;