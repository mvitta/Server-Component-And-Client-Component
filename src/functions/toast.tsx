import { IconSuccess } from '@/icons/icons'
import { toast } from 'sonner'
const duration = 10000

export function messageError(error: Error) {
  toast.error(error.name, {
    description: `${error.message}\n${error.stack}`,
    style: {
      backgroundColor: '#F87474',
      fontWeight: 'lighter',
    },
    closeButton: true,
    duration,
  })
}

//With styles css
export function messageSuccess(response: Response) {
  toast.success(`response : ${response.status}`, {
    description: ``,
    style: {
      backgroundColor: '#20c67a',
      borderWidth: '2px',
      borderColor: '#3f8880',
    },
    closeButton: true,
    icon: <IconSuccess />,
    duration,
  })
}
