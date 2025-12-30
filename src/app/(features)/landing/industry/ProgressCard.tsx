
import './progress-card.css'

const ProgressCard = ({ percentage = 70 }) => {
  // Constants for the SVG calculation
  const radius = 90; // Radius of the main arc
  const strokeWidth = 18; // Width of the arc stroke
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  // The meter is semi-circular, covering roughly 270 degrees (3/4 of a circle)
  // We'll calculate the total path length based on a 75% coverage of the full circle
  const maxPathLength = circumference * 0.75;
  const offset = maxPathLength - (percentage / 100) * maxPathLength;

  // The starting point of the arc is chosen to be slightly past the horizontal line (180 degrees)
  // The coordinates (x, y) are set for the SVG viewbox (200x200)
  const x = 100;
  const y = 100; // Center point

  // BEM Block: progress-card
  return (
    <div className="progress-card">
      <div className="progress-card__box">
        <p className="progress-card__heading">
          Unlock more business without increasing operational overhead
        </p>

        <div className="progress-card__gauge-wrapper">
          {/* SVG for the semi-circular gauge */}
          <svg
            className="progress-card__svg"
            height={radius * 2}
            width={radius * 2}
            viewBox="0 0 200 200"
          >
            {/* The full background arc (lightest blue, 270 degrees) */}
            <path
              className="progress-card__arc progress-card__arc--background"
              d={`M ${x - radius} ${y + strokeWidth / 2} A ${radius} ${radius} 0 1 1 ${x + radius} ${y + strokeWidth / 2}`}
              strokeWidth={strokeWidth}
            />

            {/* The filled progress arc (uses circumference and offset) */}
            <path
              className="progress-card__arc progress-card__arc--progress"
              d={`M ${x - radius} ${y + strokeWidth / 2} A ${radius} ${radius} 0 1 1 ${x + radius} ${y + strokeWidth / 2}`}
              strokeDasharray={`${maxPathLength} ${circumference}`}
              strokeDashoffset={offset}
              strokeWidth={strokeWidth}
            />
          </svg>

          {/* The dot/handle at the end of the progress arc */}
          <div className="progress-card__dot-handle" style={{ '--percent': percentage } as any}>
            <div className="progress-card__dot-indicator"></div>
          </div>

          {/* Text inside the gauge */}
          <div className="progress-card__text-content">
            <h3 className="progress-card__percentage-value">{percentage}%</h3>
            <p className="progress-card__status-text">
              Your DPD Resolution Rate is Good
            </p>
            <p className="progress-card__last-check">
              Last Check on 21 Apr
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
