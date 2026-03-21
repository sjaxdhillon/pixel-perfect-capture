interface ProcessStepsProps {
  steps: { title: string; body: string }[];
}

const ProcessSteps = ({ steps }: ProcessStepsProps) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
    {steps.map((step, i) => (
      <div key={i} className="relative">
        <span className="font-display font-extrabold text-display text-blue-50 leading-none select-none">
          {String(i + 1).padStart(2, "0")}
        </span>
        <h4 className="font-display text-h4 text-brand-navy mt-1 mb-2">{step.title}</h4>
        <p className="font-body text-body-sm text-brand-slate">{step.body}</p>
        {i < steps.length - 1 && (
          <div className="hidden lg:block absolute top-6 right-0 w-8 border-t-2 border-dashed border-blue-100 translate-x-4" />
        )}
      </div>
    ))}
  </div>
);

export default ProcessSteps;
