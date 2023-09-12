import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Tags = ({ tag }) => {
  return (
    <Grid
      item
      md={3.9}
      sx={{
        border: "1px solid #DBDCE0",
        borderRadius: "8px",
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          padding: "20px",
          borderBottom: "1px solid rgba(32, 33, 36, 0.1)",
        }}
      >
        <Grid item xs={12} textAlign="center">
          <Typography
            sx={{
              color: "#404040",
              fontWeight: 700,
              fontSize: "16px",
            }}
          >
            {tag.name}
          </Typography>
        </Grid>

        <Grid container mt="17px">
          <Grid
            container
            flexDirection="column"
            item
            md={6}
            xs={12}
            alignItems="center"
            sx={{
              borderRight: "1px solid rgba(32, 33, 36, 0.1)",
            }}
          >
            <Box
              sx={{
                background: "#eaeefb",
                display: "grid",
                placeContent: "center",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                marginBottom: "8px",
              }}
            >
              <Typography
                sx={{
                  color: "#2858D3",
                  fontWeight: 700,
                }}
              >
                {tag.personalized}
              </Typography>
            </Box>
            <Typography
              sx={{
                color: "#404040",
                fontWeight: 700,
                fontSize: "16px",
              }}
            >
              Personalized
            </Typography>
          </Grid>
          <Grid
            container
            flexDirection="column"
            item
            md={6}
            xs={12}
            alignItems="center"
          >
            <Box
              sx={{
                background: "#eaeefb",
                display: "grid",
                placeContent: "center",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                marginBottom: "8px",
              }}
            >
              <Typography
                sx={{
                  color: "#2858D3",
                  fontWeight: 700,
                }}
              >
                {tag.nonPersonalized}
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#404040",
                  fontWeight: 700,
                  fontSize: "16px",
                }}
              >
                Non Personalized
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      {Array.isArray(tag.values) && tag.values.length > 0 && (
        <Grid
          item
          xs={12}
          sx={{
            padding: "20px",
            borderBottom: "1px solid rgba(32, 33, 36, 0.1)",
          }}
        >
          <Grid item xs={12} textAlign="center">
            <Typography
              sx={{
                color: "#404040",
                fontWeight: 700,
                fontSize: "16px",
              }}
            >
              Top Values
            </Typography>
          </Grid>

          {Array.isArray(tag.values) && tag.values.length > 0 && (
            <Grid container mt="17px">
              {tag.values.map((value, index) => {
                let columnSize = 4;
                if (tag.values.length === 2) {
                  columnSize = 6;
                }
                if (tag.values.length === 1) {
                  columnSize = 12;
                }
                return (
                  <Grid
                    container
                    flexDirection="column"
                    item
                    md={columnSize}
                    xs={12}
                    alignItems="center"
                    sx={{
                      borderRight:
                        index === tag.values.length - 1
                          ? "0"
                          : "1px solid rgba(32, 33, 36, 0.1)",
                    }}
                  >
                    <Box
                      sx={{
                        background: "#eaeefb",
                        display: "grid",
                        placeContent: "center",
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        marginBottom: "8px",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#2858D3",
                          fontWeight: 700,
                        }}
                      >
                        {value.value}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        color: "#404040",
                        fontWeight: 700,
                        fontSize: "16px",
                      }}
                    >
                      {value.name}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          )}
        </Grid>
      )}
    </Grid>
  );
};

export default Tags;
