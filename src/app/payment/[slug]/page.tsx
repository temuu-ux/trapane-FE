"use client";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import PaymentTierCard from "@/components/payment/PaymentTierCard";
import { TierWithIdType } from "@/utils/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

const PaymentPage = ({ params }: { params: { slug: string } }) => {
  const [selectedTier, setSelectedTier] = useState<TierWithIdType | null>(null);
  const [customDonationAmount, setCustomDonationAmount] = useState("");
  const [tiers, setTiers] = useState<TierWithIdType[]>([]);

  const selectTier = (tier: TierWithIdType) => {
    console.log(tier);
    setSelectedTier(tier);
    setCustomDonationAmount("");
  };
  const router = useRouter();
  const creatorName = params.slug.split("/")[0];
  useEffect(() => {
    const fetchTiers = async () => {
      const response = await fetch(
        "https://trapane-back.vercel.app/api/tier/getByCreatorName",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ creatorName }),
        }
      );
      const data = await response.json();
      setTiers(data);
      console.log(data);
    };
    fetchTiers();
  }, []);

  const handleCustomDonationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCustomDonationAmount(e.target.value);
    setSelectedTier(null);
  };
  const handleDonationSubmit = async (values: any) => {
    console.log("Donation:", values);
  };
  const handleSubscriptionSubmit = async (values: any) => {
    console.log("Subscription:", values);
    const response = await fetch(
      "https://trapane-back.vercel.app/api/subscription/createSub",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          patronId: localStorage.getItem("patronToken"),
          creatorName: creatorName,
          tierId: selectedTier?._id,
          status: "active",
          startDate: new Date().toISOString(),
          paymentMethod: "card",
        }),
      }
    );
    const data = await response.json();
    console.log(data);
    if (response.status === 200) {
      router.push(`/creator/${creatorName}`);
    }
  };

  const initialValues = {
    cardHolderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  };

  const cardNumberRegex = /^[0-9]{16}$/;
  const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
  const cvvRegex = /^[0-9]{3,4}$/;
  return (
    <div className="mx-auto max-w-[390px] bg-neutral-900 text-white py-8 px-4">
      <h1 className="text-2xl font-bold mb-4">Payment Page</h1>
      <div className="flex flex-col gap-8">
        {tiers.map((tier, index) => (
          <PaymentTierCard key={index} data={tier} selectTier={selectTier} />
        ))}
      </div>
      <div className="mb-4 border border-gray-600 p-4 rounded-lg">
        <Label htmlFor="customDonation" className="mb-2 text-lg font-semibold">
          Donate a custom amount:
        </Label>
        <Input
          id="customDonation"
          type="number"
          value={customDonationAmount}
          onChange={handleCustomDonationChange}
          placeholder="Enter amount"
          className="bg-neutral-800 text-white placeholder-neutral-400 mb-4"
        />
        {customDonationAmount && (
          <div className="mb-4">
            <p className="text-lg font-semibold">Custom Donation Amount:</p>
            <p>${customDonationAmount}</p>
          </div>
        )}
      </div>

      {selectedTier && (
        <div className="mb-4 border border-gray-600 p-4 rounded-lg">
          <p className="text-lg font-semibold">Selected Tier:</p>
          <p>{selectedTier.title}</p>
        </div>
      )}
      {(selectedTier || customDonationAmount) && (
        <Formik
          initialValues={initialValues}
          onSubmit={
            selectedTier ? handleSubscriptionSubmit : handleDonationSubmit
          }
        >
          {() => (
            <Form>
              <div className="mb-4">
                <Label htmlFor="cardHolderName" className="mb-2">
                  Cardholder Name
                </Label>
                <Field
                  as={Input}
                  id="cardHolderName"
                  name="cardHolderName"
                  placeholder="Cardholder Name"
                  className="bg-neutral-800 text-white placeholder-neutral-400"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="cardNumber" className="mb-2">
                  Card Number
                </Label>
                <Field
                  as={Input}
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="Card Number"
                  className="bg-neutral-800 text-white placeholder-neutral-400"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="expiryDate" className="mb-2">
                  Expiry Date
                </Label>
                <Field
                  as={Input}
                  id="expiryDate"
                  name="expiryDate"
                  placeholder="MM/YY"
                  className="bg-neutral-800 text-white placeholder-neutral-400"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="cvv" className="mb-2">
                  CVV
                </Label>
                <Field
                  as={Input}
                  id="cvv"
                  name="cvv"
                  placeholder="CVV"
                  className="bg-neutral-800 text-white placeholder-neutral-400"
                />
              </div>
              <Button type="submit" className="w-full">
                {selectedTier ? "Subscribe" : "Donate"}
              </Button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default PaymentPage;
