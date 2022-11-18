export const CONSTANTS = {
    REMOVE_ARROW_DEVICES: ["tablet", "mobile", "desktop"],
    RESPONSIVE: {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,
        }
    },
    DEVICETYPE: "mobile"
}

export const MESSAGE = "Oops! No Data Found..."