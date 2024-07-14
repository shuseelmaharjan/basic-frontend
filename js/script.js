const contentData = [
    {
        heading: "The International Baccalaureate for all",
        heading1: "Skills Proficiency Awards in Basic Food Preparation",
        paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam rerum perferendis beatae sed asperiores doloribus nesciunt vitae et nam suscipit enim quaerat distinctio molestiae, expedita obcaecati consequatur cumque nemo magnam?",
        imgSrc: "../images/01.jpg"
    },
    {
        heading: "The International Baccalaureate for all",
        heading1: "Level 2 Diploma in Food Preparation - Patisserie",
        paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam rerum perferendis beatae sed asperiores doloribus nesciunt vitae et nam suscipit enim quaerat distinctio molestiae, expedita obcaecati consequatur cumque nemo magnam?",
        imgSrc: "../images/02.jpg"
    },
    {
        heading: "The International Baccalaureate for all",
        heading1: "Pearson Test of English (PTE) Academic",
        paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam rerum perferendis beatae sed asperiores doloribus nesciunt vitae et nam suscipit enim quaerat distinctio molestiae, expedita obcaecati consequatur cumque nemo magnam?",
        imgSrc: "../images/03.jpg"
    }
];

let currentIndex = 0;

const headingElement = document.getElementById('heading');
const heading1Element = document.getElementById('heading1');
const paragraphElement = document.getElementById('paragraph');
const imageElement = document.getElementById('image');

function updateContent(index) {
    headingElement.textContent = contentData[index].heading;
    heading1Element.textContent = contentData[index].heading1;
    paragraphElement.textContent = contentData[index].paragraph;
    imageElement.src = contentData[index].imgSrc;
}

document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % contentData.length;
    updateContent(currentIndex);
});

document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + contentData.length) % contentData.length;
    updateContent(currentIndex);
});

updateContent(currentIndex);
