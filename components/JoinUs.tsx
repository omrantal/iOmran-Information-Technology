import React, { useState, ChangeEvent } from 'react';
import { Input, Select, BottomGradient } from "@/components/ui/Input";
import { LabelInputContainer, Label } from "@/components/ui/Label";

const JoinUs = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fullName, setFullName] = useState<string>('');
  const [sex, setSex] = useState<string>('male'); // Default to male
  const [militaryStatus, setMilitaryStatus] = useState<string>('studying'); // Default value
  const [maritalStatus, setMaritalStatus] = useState<string>('single'); // Default value

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateString = e.target.value;
    setSelectedDate(dateString ? new Date(dateString) : null);
  };

  const formatDateForInput = (date: Date | null): string => {
    if (!date) return '';
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && (file.type === 'application/pdf' || file.type === 'application/msword' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
      setSelectedFile(file);
    } else {
      alert('Please upload a PDF or Word file.');
      e.target.value = ''; // Clear the input field
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Full Name:', fullName);
    console.log('Sex:', sex);
    console.log('Military Status:', militaryStatus);
    console.log('Marital Status:', maritalStatus);
    console.log('Date of Birth:', selectedDate);
    console.log('CV File:', selectedFile);

    setFullName('')
    setSex('male')
    setMaritalStatus('single')
    setMilitaryStatus('studying')
    setSelectedDate(null)
    setSelectedFile(null)
  };

  return (
    <section id="joinus">
      <div className='bg-blue/30 py-10 px-10'>
        <div className="text-center">
          <h1 className="heading text-2xl md:text-3xl lg:text-4xl">
            Join Our Team
          </h1>

          <p className="mt-3 text-md md:text-xl lg:text-2xl text-lemongrass sm:mt-4">
            Submit your application and become a part of our journey!
          </p>
        </div>

        <form className="my-8 text-center" onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 sm:gap-6'>
            <LabelInputContainer className='mb-4'>
              <Label htmlFor="firstname">Full name</Label>
              <Input
                id="firstname"
                type="text"
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Tyler John Durden"
              />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="sex">Sex</Label>
              <Select
                id="sex"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
                required
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Select>
            </LabelInputContainer>

            {sex === 'male' && (
              <LabelInputContainer className="mb-4">
                <Label htmlFor="militaryStatus">Military Status</Label>
                <Select
                  id="militaryStatus"
                  value={militaryStatus}
                  onChange={(e) => setMilitaryStatus(e.target.value)}
                  required
                >
                  <option value="studying">Studying</option>
                  <option value="doneService">Done Service</option>
                  <option value="inService">In Service</option>
                  <option value="singleToFamily">Single to Family</option>
                </Select>
              </LabelInputContainer>
            )}

            <LabelInputContainer className="mb-4">
              <Label htmlFor="maritalStatus">Marital Status</Label>
              <Select
                id="maritalStatus"
                value={maritalStatus}
                onChange={(e) => setMaritalStatus(e.target.value)}
                required
              >
                <option value="single">Single</option>
                <option value="married">Married</option>
              </Select>
            </LabelInputContainer>

            <LabelInputContainer className='mb-4'>
              <Label htmlFor="dob">Date of Birth</Label>
              <Input // Use a regular HTML input element 
                type='date'
                id="dob"
                value={formatDateForInput(selectedDate)}
                onChange={handleDateChange}
              />
            </LabelInputContainer>

            <LabelInputContainer className='mb-4 flex justify-end'>
              <Label htmlFor="cv" className='mx-auto mt-4 w-auto flex flex-col items-center justify-center p-4 rounded-lg shadow-lg tracking-wide uppercase border border-white cursor-pointer'>
                {selectedFile ? (
                  <span className='text-blue'>
                    {selectedFile.name}
                  </span>
                ) : (
                  <div className='flex justify-center items-center'>
                    <svg className="w-8 h-8 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <span>Upload CV</span>
                  </div>
                )}
                <Input
                  type="file"
                  id="cv"
                  accept=".pdf,.doc,.docx"
                  className='hidden'
                  onChange={handleFileChange}
                />
              </Label>
            </LabelInputContainer>
          </div>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-auto mx-auto px-4 text-white rounded-md h-16 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Submit your data &rarr;
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-blue to-transparent my-8 h-[1px] w-full" />
        </form>
      </div>
    </section>
  );
};

export default JoinUs
