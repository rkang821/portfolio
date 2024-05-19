import Card from '@/components/shared/card'
import { type EventProps } from '@/models/experience'

export default function Event({
  title,
  description,
  event,
  linkdescription,
  href,
  tags,
}: EventProps) {
  return (
    <Card>
      <Card.Title>{title}</Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.LinkDescription href={href} target="_blank">
        {linkdescription}
      </Card.LinkDescription>
      <Card.Tags>
        {tags.map((Tag, index) => (
          <Tag key={index} />
        ))}
      </Card.Tags>
    </Card>
  )
}
