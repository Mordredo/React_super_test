const overrides = {
  MuiButton: {
    root: {
      fontSize: "1.6rem",
      lineHeight: "1.9rem",
      fontWeight: "bold",
      textTransform: "none",
      text: {
        color: "#FFFCFE",
      },
      borderRadius: "0.5rem",
    },
  },
  MuiAvatar: {
    root: {
      width: "5rem",
      height: "5rem",
    },
  },
  MuiPaginationItem: {
    root: {
      width: "3rem",
      height: "3rem",
      margin: "0 0.45rem",
      backgroundColor: "#E2E8F0",
      color: "#2C5282",
      fontSize: "1.6rem",
      lineHeight: "1.9rem",
      fontWeight: "bold",
    },
  },
  MuiInputBase: {
    root: {
      "&::before, &::after": {
        border: "none !important",
      },
      // backgroundColor: "#eeeeee",
      // margin: "2.4rem 0",
      // height: "7rem",
      // borderRadius: "1rem",
      // fontSize: "2rem",
      // color: "#2A4365",
    },
  },
  MuiAppBar: {
    root: {
      padding: "1.5rem 3.8rem 1.5rem 7rem",
    },
  },
};

export default overrides;
