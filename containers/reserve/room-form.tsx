"use client";
import { PropsWithChildren } from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useAtom } from "jotai";
import CountField from "@/components/count-field/count-field";
import { PopoverClose } from "@/components/ui/popover";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { reserveGuestAndRoomAtom } from "@/store/reserve";
const FormSchema = z.object({
  pet: z.boolean().default(false),
  room: z.number().min(0),
  adults: z.number().min(0),
  children: z.number().min(0),
});

const RoomForm = () => {
  const [reserveGuestAndRoom, setReserveGuestAndRoom] = useAtom(
    reserveGuestAndRoomAtom
  );

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pet: reserveGuestAndRoom?.pet || false,
      room: reserveGuestAndRoom?.room || 0,
      adults: reserveGuestAndRoom?.adults || 0,
      children: reserveGuestAndRoom?.children || 0,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setReserveGuestAndRoom(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col gap-6 ">
          <h2 className="text-textxl">Room</h2>
          <FormField
            control={form.control}
            name="room"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <CountField title="Room" field={field} />
                </FormControl>
              </FormItem>
            )}
          />

          <PopoverClose type="submit" className="self-end">
            <Button className="w-fit">Apply</Button>
          </PopoverClose>
        </div>
      </form>
    </Form>
  );
};
export default RoomForm;