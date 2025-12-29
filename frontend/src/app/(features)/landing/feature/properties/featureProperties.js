import appointment from '../../../../../../public/_assets/images/appointment-services.png'
import inventory from '../../../../../../public/_assets/images/Inventory-services.png'
import recruitment from '../../../../../../public/_assets/images/recruitment-services.png'
import task from '../../../../../../public/_assets/images/task-management-services.png'

export default [
    {
        id: 0,
        img: {
            src: appointment,
            alt: "Appointment Services"
        },
        hook: "Center your focus",
        header: "Appointment Scheduler",
        mainInfo: "Effortlessly manage client bookings with a scheduling system that keeps your calendar organized and your operations running smoothly.",
        color: '#0073af',
    },

    {
        id: 1,
        img: {
            src: recruitment,
            alt: "Recruitment Services"
        },
        hook: "Spot the tailored people",
        header: "Recruitment Portal",
        mainInfo: "Streamline hiring with a recruitment system that centralizes application, candidate profiles, and evaluation tools.",
        color: '#008281',
    },

    {
        id: 2,
        img: {
            src: inventory,
            alt: "Inventory Services"
        },

        hook: "Aim the right deliverables",
        header: "Inventory Management",
        mainInfo: "Track stock levels in real time with a smart inventory system that helps maintain accuracy and avoid shortages.",
        color: '#ffaa00',
    },

    {
        id: 3,
        img: {
            src: task,
            alt: "Task Mangement Services"
        },
        hook: "Centralize the list",
        header: "Task Management",
        mainInfo: "Organize workflows with a task system design to simplify planning, assignment, and progress tracking.",
        color: '#ec005c',
    }
]