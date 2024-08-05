import { useRouter } from "next/navigation";

export default function useNavigateSteps() {
  const router = useRouter();

  const nextStep = (step: string) => {
    router.push(step);
  };

  const prevStep = () => {
    router.back();
  };

  const replaceStep = (step: string) => {
    router.replace(step);
  };

  return { nextStep, prevStep, replaceStep };
}
