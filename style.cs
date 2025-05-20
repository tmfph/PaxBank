/* Effet de transition fluide entre les sections */
section {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 1s ease-in-out forwards;
}

/* Animation d'apparition progressive */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Bouton interactif */
.button {
    background-color: #ffcc00;
    color: #000;
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.button:hover {
    transform: scale(1.1);
    box-shadow: 0px 4px 15px rgba(255, 255, 255, 0.3);
}

/* Ajout d'un effet de surbrillance aux liens */
nav ul li a:hover {
    color: #ffffff;
    text-shadow: 0px 0px 5px rgba(255, 255, 255, 0.8);
}
