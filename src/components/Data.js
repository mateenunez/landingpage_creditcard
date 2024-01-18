
import { RiFacebookCircleFill, RiInstagramLine, RiLinkedinBoxFill, RiTwitterXFill } from "react-icons/ri";

const DataHeader = [
    {
        id: 1,
        title: "Mastercard para vos",
        link: "#findyourcard"
    },
    {
        id: 2,
        title: "Mastercard para empresas",
        link: "/"
    },
    {
        id: 3,
        title: "Tarjetas Mastercard",
        link: "#cards"
    },
    {
        id: 4,
        title: "Nosotros",
        link: "/"
    }
];

const DataCards = [
    {
        id:1,
        src:"/tarjeta-prepago-standard-1280x720.png",
        message: "Para compras diarias y mucho más"
    },
    {
        id:2,
        src:"/tarjeta-business-prepaid-1280x720.png",
        message: "Más seguras que el efectivo y aceptadas en todo el mundo"
    },
    {
        id:3,
        src:"/tarjeta-black-credito-1280x720.png",
        message: "Experimentá los momentos más memorables de la vida. En cualquier momento y lugar del mundo."
    },
    {
        id:4,
        src:"/tarjeta-credito-gold-1280x720.png",
        message: "Mastercard Gold es la tarjeta dorada en su género con amplios beneficios y con una aceptación insuperable"
    }

]

const DataPayments = [
    {
        id:1,
        src:"/payment-1.png"
    },
    {
        id:2,
        src:"/payment-2.png"
    }, 
    {
        id:3,
        src:"/payment-3.png"
    }, 
    {
        id:4,
        src:"/payment-4.png"
    }, 
    {
        id:5,
        src:"/payment-5.png"
    }, 
    {
        id:6,
        src:"/payment-6.png"
    }, 
    {
        id:7,
        src:"/payment-7.png"
    }, 
    {
        id:8,
        src:"/payment-8.png"
    },  
]

const DataFooter = [
    {
        id:1,
        title: "Estamos aquí para ayudarte.",
        links: [{
            id: 1,
            subtitle: "Chat por WhatsApp."
        },
        {
         id: 2,
         subtitle: "Encontrá un cajero automático."   
        },{
            id:3,
            subtitle: "Preguntas frecuentes."
        }]
    },
    {
        id:2,
        title: "Compañía",
        links:[{
            id:1,
            subtitle: "Quiénes somos."
        },{
            id:2,
            subtitle: "Empleos."
        },{
            id:3,
            subtitle: "Noticias."
        },{
            id:4,
            subtitle: "Relación de inversores."
        }]
    },

]

const DataSocialMediaFooter = [
    {
        id: 1,
        icon: <RiInstagramLine />,
        link: "#"
      },
      {
        id: 2,
        icon: <RiFacebookCircleFill />,
        link: "#"
      },
      {
        id: 3,
        icon: <RiTwitterXFill />,
        link: "#"
      },
      {
        id: 4,
        icon: <RiLinkedinBoxFill />,
        link: "#"
      }
]

export {DataHeader, DataCards, DataPayments, DataFooter, DataSocialMediaFooter};