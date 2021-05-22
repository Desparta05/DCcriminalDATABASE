import React from "react";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function VillainList({ children }) {
    return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function VillainListItem({
    Alias,
    Name,
    City,
    Gender,
    Height,
    Weight,
    EyeColor,
    HairColor,
    Powers,
    Description,
    Image,
}) {
    return (
        <li className="list-group-item">
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                        <Thumbnail src={thumbnail} />
                    </Col>
                    <Col size="xs-8 sm-9">
                        <h3>{title}</h3>
                        <p>
                            Description: "{Description.join(", ")}"
                </p>
                        <a
                            rel="noreferrer noopener"
                            target="_blank"
                            href={href}
                        >
                            Go to recipe!
                </a>
                    </Col>
                </Row>
            </Container>
        </li>
    );
}
