import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const MessageModal = ({ isOpen, onClose, onSubmit }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="py-8">
        <DialogHeader>
          <DialogTitle>Message X</DialogTitle>
        </DialogHeader>
        <Textarea
          placeholder="Your Message"
          className="w-full h-52 p-4 resize-none border rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex justify-end mt-4 space-x-2">
          <Button type="button" onClick={onSubmit}>
            Send
          </Button>
          <Button
            variant="destructive"
            className="px-4 py-2 "
            onClick={onClose}
          >
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MessageModal;