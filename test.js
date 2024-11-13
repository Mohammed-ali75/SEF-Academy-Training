const Business = () => {
  const { articles, isLoading, error } = useArticles();
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!articles || articles.length === 0) {
    return <div>No business articles found.</div>;
  }

  const businessArticles = articles?.filter((article) => {
    return article?.category === "Business";
  });

  const { minTimeArticle1 } = findMinTimeBusinessArticles(articles);

  const retrievedData = JSON.parse(localStorage.getItem("articleData"));
  const businessArticles2 = retrievedData?.filter((article) => {
    return article?.category === "Business";
  });

  if (Array.isArray(businessArticles2)) {
    businessArticles2.reverse();
  }

  const {
    latestPublishingDateArticle1,
    latestPublishingDateArticle2,
    latestPublishingDateArticle3,
  } = findMinPublishingDateBusinessArticles(articles); // Pass the articles here if needed

  return (
    <div className="Business">
      <Container>
        <h2 className="h2Business">Latest Business News</h2>
      </Container>

      <Container className="ContainerHome">
        <Row xs={1} md={2} className="rowHomeAll">
          <Col className="colBusinessA">
            <Row className="rowBusiness">
              {minTimeArticle1 && (
                <Col className="col2Home colBusiness3">
                  <NavLink
                    className="NOTA"
                    onClick={() => {
                      navigate(`/business/${minTimeArticle1.id}`);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <p className="pHome1">{minTimeArticle1.category}</p>
                    <div className="LC LCB">
                      <FontAwesomeIcon icon={faClock} />
                      <p className="pHome2">{minTimeArticle1.time}</p>
                    </div>
                    <h2 className="h2Home">{minTimeArticle1.title}</h2>
                    <p className="pHome3">{minTimeArticle1.content}</p>
                  </NavLink>
                </Col>
              )}
            </Row>
          </Col>
          <Col className="colBusinessB">
            <Row xs={1} md={2} className="rowBusiness">
              {latestPublishingDateArticle1 && (
                <Col className="col3Home colBusiness2">
                  <NavLink
                    className="NOTA2"
                    onClick={() => {
                      localStorage.setItem(
                        "selectedArticleId",
                        latestPublishingDateArticle1.id
                      );
                      navigate(`/business/${latestPublishingDateArticle1.id}`);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <p className="pHome1">
                      {latestPublishingDateArticle1.category}
                    </p>
                    <div className="LC">
                      <FontAwesomeIcon icon={faClock} />
                      <p className="pHome2">
                        {latestPublishingDateArticle1.publishingDate}
                      </p>
                    </div>
                    <h2 className="h4Home">
                      {latestPublishingDateArticle1.articleTitle}
                    </h2>
                    <p className="pHome3 pHome32">
                      {latestPublishingDateArticle1.content}
                    </p>
                  </NavLink>
                </Col>
              )}

              {latestPublishingDateArticle2 && (
                <Col className="col4Home colBusiness">
                  <NavLink
                    className="NOTA3"
                    onClick={() => {
                      localStorage.setItem(
                        "selectedArticleId",
                        latestPublishingDateArticle2.id
                      );
                      navigate(`/business/${latestPublishingDateArticle2.id}`);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <p className="pHome1">
                      {latestPublishingDateArticle2.category}
                    </p>
                    <div className="LC">
                      <FontAwesomeIcon icon={faClock} />
                      <p className="pHome2">
                        {latestPublishingDateArticle2.publishingDate}
                      </p>
                    </div>
                    <h2 className="h4Home">
                      {latestPublishingDateArticle2.articleTitle}
                    </h2>
                    <p className="pHome3 pHome32">
                      {latestPublishingDateArticle2.content}
                    </p>
                  </NavLink>
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </Container>

      <Container className="ContainerCard ContainerCardAll">
        {businessArticles2 &&
          businessArticles2.map((article) => {
            if (article.status !== "draft")
              return (
                <Card className="cardHome" key={article?.id}>
                  <Card.Img variant="top" src={article?.path || ""} />
                  <Card.Body>
                    <Card.Title className="pHome1">
                      {article?.category}
                    </Card.Title>
                    <div className="LC">
                      <FontAwesomeIcon icon={faClock} />
                      <p className="pHomeCard">{article?.publishingDate}</p>
                    </div>
                    <h2 className="h2Home">{article?.articleTitle}</h2>
                    <Row>
                      <Col sm={10}>
                        <Card.Text className="card-text-card">
                          {article?.content}
                        </Card.Text>
                      </Col>
                      <Col sm={2}>
                        <Button
                          variant="primary"
                          onClick={() => {
                            localStorage.setItem(
                              "selectedArticleId",
                              article.id
                            );
                            navigate(`/business/${article.id}`);
                            window.scrollTo(0, 0);
                          }}
                        >
                          <FontAwesomeIcon icon={faAnglesRight} />
                        </Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              );
          })}

        {businessArticles &&
          businessArticles.map((article) => {
            return (
              <Card className="cardHome" key={article?.id}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title className="pHome1">
                    {article?.category}
                  </Card.Title>
                  <div className="LC">
                    <FontAwesomeIcon icon={faClock} />
                    <p className="pHomeCard">{article?.time}</p>
                  </div>
                  <h2 className="h2Home">{article?.title}</h2>
                  <Row>
                    <Col sm={10}>
                      <Card.Text className="card-text-card">
                        {article?.content}
                      </Card.Text>
                    </Col>
                    <Col sm={2}>
                      <Button
                        variant="primary"
                        onClick={() => {
                          navigate(`/business/${article?.id}`);
                          window.scrollTo(0, 0);
                        }}
                      >
                        <FontAwesomeIcon icon={faAnglesRight} />
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            );
          })}
      </Container>
    </div>
  );
};

export default Business;
